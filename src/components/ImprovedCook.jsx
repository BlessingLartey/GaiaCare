import React, { useState } from "react";
import "../Styles/DynamicForm.css";

const ImprovedCook = () => {
  const [formData, setFormData] = useState([
    {
      id: 1,
      mainCategory: "",
      weight: "",
      descriptions: [
        {
          id: 1,
          weight: "",
          description: "",
          target: "",
          actual: "",
          percentageAchieved: "",
          prePercentageCalculated: "",
          startDate: "",
          endDate: "",
        },
      ],
    },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    {
      name: "Socialization",
      weight: 5,
      defaultDescriptions: [
        "Community Meeting",
        "Interested Farmers",
        "something",
      ],
    },
    {
      name: "Interest household list",
      weight: 10,
      defaultDescriptions: ["Registration", "Documentation"],
    },
    {
      name: "Selection of store builders",
      weight: 10,
      defaultDescriptions: ["Data Validation", "Data Verification"],
    },
    {
      name: "Training of store builders",
      weight: 15,
      defaultDescriptions: ["Data Validation", "Data Verification"],
    },
    {
      name: "Store Construction",
      weight: 30,
      defaultDescriptions: ["Data Validation", "Data Verification"],
    },
    {
      name: "Monitoring and payments",
      weight: 10,
      defaultDescriptions: ["Product Delivery", "Distribution Logistics"],
    },
    {
      name: "Endline Survey",
      weight: 10,
      defaultDescriptions: ["Monitoring", "Evaluation"],
    },
    {
      name: "Reporting",
      weight: 10,
      defaultDescriptions: ["Replanting Process", "Seedling Selection"],
    },
  ];

  const handleAddRow = () => {
    setFormData([
      ...formData,
      {
        id: formData.length + 1,
        mainCategory: "",
        weight: "",
        descriptions: [
          {
            id: 1,
            weight: "",
            description: "",
            target: "",
            actual: "",
            percentageAchieved: "",
            prePercentageCalculated: "",
            startDate: "",
            endDate: "",
          },
        ],
      },
    ]);
  };

  const handleChange = (e, mainCategoryId, descriptionId, field) => {
    const { value } = e.target;
    const updatedFormData = formData.map((mainCategory) => {
      if (mainCategory.id === mainCategoryId) {
        const updatedDescriptions = mainCategory.descriptions.map(
          (description) => {
            if (description.id === descriptionId) {
              return { ...description, [field]: value };
            }
            return description;
          }
        );
        const totalWeight = updatedDescriptions.reduce(
          (acc, desc) => acc + parseInt(desc.weight || 0),
          0
        );
        return {
          ...mainCategory,
          descriptions: updatedDescriptions,
          weight: totalWeight,
        };
      }
      return mainCategory;
    });
    setFormData(updatedFormData);
  };

  const handleMainCategoryChange = (e, mainCategoryId) => {
    const { value } = e.target;
    const selectedOption = options.find((option) => option.name === value);
    if (selectedOption) {
      const defaultDescriptions = selectedOption.defaultDescriptions;
      const totalWeight = selectedOption.weight;
      const updatedFormData = formData.map((mainCategory) => {
        if (mainCategory.id === mainCategoryId) {
          return {
            ...mainCategory,
            mainCategory: value,
            weight: totalWeight,
            descriptions: defaultDescriptions.map((description, index) => ({
              id: index + 1,
              weight: Math.floor(
                (totalWeight / 100) * (100 / defaultDescriptions.length)
              ),
              description: description,
              target: `${(index + 1) * 1000}`, // Pre-populate target field with figures in thousands
              actual: "",
              percentageAchieved: "",
              prePercentageCalculated: "",
              startDate: "",
              endDate: "",
            })),
          };
        }
        return mainCategory;
      });
      setFormData(updatedFormData);

      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleRemoveRow = (mainCategoryId) => {
    const updatedFormData = formData.filter(
      (mainCategory) => mainCategory.id !== mainCategoryId
    );

    // Update the selected options state
    const removedCategory = formData.find(
      (mainCategory) => mainCategory.id === mainCategoryId
    ).mainCategory;
    setSelectedOptions(
      selectedOptions.filter((option) => option !== removedCategory)
    );
    setFormData(updatedFormData);
  };

  const handleAddButtonClicked = () => {
    // Calculate the percentage achieved for each description
    const updatedFormData = formData.map((mainCategory) => {
      const updatedDescriptions = mainCategory.descriptions.map(
        (description) => {
          const percentageAchieved =
            description.actual && description.target
              ? (parseFloat(description.actual) /
                  parseFloat(description.target)) *
                  100 +
                "%"
              : "";

          const prePercentageCalculated =
            description.actual && description.target
              ? (parseFloat(description.actual) /
                  parseFloat(description.target)) *
                  100 *
                  (parseFloat(description.weight) /
                    parseFloat(mainCategory.weight)) +
                "%"
              : "";

          return {
            ...description,
            percentageAchieved,
            prePercentageCalculated,
          };
        }
      );
      return {
        ...mainCategory,
        descriptions: updatedDescriptions,
      };
    });
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the total percentage achieved
    const totalPercentageAchieved = formData.reduce((acc, mainCategory) => {
      const categoryTotal = mainCategory.descriptions.reduce(
        (categoryAcc, description) => {
          // Ensure that totalPercentageAchieved is a number before adding it to the accumulator
          const percentage = parseFloat(description.totalPercentageAchieved);
          return !isNaN(percentage) ? categoryAcc + percentage : categoryAcc;
        },
        0
      );
      return acc + categoryTotal;
    }, 0);

    // Fetch API to post data
    fetch("http://localhost:3000/api/result", {
      method: "POST",
      body: JSON.stringify({
        totalPercentageAchieved,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((formData) => console.log(formData))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3 className="main-category">Improved Cookstove </h3>
      <div className="category">
        {formData.map((mainCategory) => (
          <div key={mainCategory.id}>
            <div className="add-main-category">
              <select
                value={mainCategory.mainCategory}
                onChange={(e) => handleMainCategoryChange(e, mainCategory.id)}
              >
                <option value="">Select Main Category</option>
                {options.map((option) => (
                  <option
                    key={option.name}
                    value={option.name}
                    disabled={selectedOptions.includes(option.name)}
                  >
                    {option.name}
                  </option>
                ))}
              </select>
              <div className="weight-container">
                <span>Main Category Weight: {mainCategory.weight}</span>
                <span id="percentageAchieved" name="percentageAchieved">
                  Total Percentage Achieved:
                  {mainCategory.descriptions.reduce(
                    (acc, desc) =>
                      acc + parseFloat(desc.totalPercentageAchieved || 0),
                    0
                  )}
                  %
                </span>
              </div>
              <button onClick={() => handleRemoveRow(mainCategory.id)}>
                Remove Main Category
              </button>
            </div>
            <h4>Description</h4>
            <table className="description-table">
              <thead>
                <tr>
                  <th>Weight</th>
                  <th>Description</th>
                  <th>Target</th>
                  <th>Actual</th>
                  <th>Percentage Achieved</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {mainCategory.descriptions.map((description) => (
                  <tr key={description.id}>
                    <td>
                      <span>{description.weight}</span>
                    </td>
                    <td>
                      <input
                        type="text"
                        value={description.description}
                        onChange={(e) =>
                          handleChange(
                            e,
                            mainCategory.id,
                            description.id,
                            "description"
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={description.target}
                        onChange={(e) =>
                          handleChange(
                            e,
                            mainCategory.id,
                            description.id,
                            "target"
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={description.actual}
                        onChange={(e) =>
                          handleChange(
                            e,
                            mainCategory.id,
                            description.id,
                            "actual"
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={description.percentageAchieved}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={description.startDate}
                        onChange={(e) =>
                          handleChange(
                            e,
                            mainCategory.id,
                            description.id,
                            "startDate"
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={description.endDate}
                        onChange={(e) =>
                          handleChange(
                            e,
                            mainCategory.id,
                            description.id,
                            "endDate"
                          )
                        }
                      />
                    </td>
                    <td className="action-buttons">
                      <div className="add-button">
                        <button onClick={handleAddButtonClicked}>Add</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <div className="add-main-category">
        <button onClick={handleAddRow}>Add Main Category</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ImprovedCook;
