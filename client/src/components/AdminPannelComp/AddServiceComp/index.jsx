import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import JoditEditor from "jodit-react";

const AddServiceComp = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [bannerimgPreview, setBannerimgPreview] = useState(null);
  const [bannerimgFile, setBannerimgFile] = useState(null);
  const [content, setContent] = useState("");
  const [logs, setLogs] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryPrice, setSubCategoryPrice] = useState(0);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const appendLog = useCallback(
    (message) => {
      console.log("logs = ", logs);
      const newLogs = [...logs, message];
      setLogs(newLogs);
    },
    [logs, setLogs]
  );
  const config = useMemo(
    () => ({
      readonly: false,
      height: 400,
      toolbar: true,
      spellcheck: true,
      language: "en",
      toolbarButtonSize: "medium",
      toolbarAdaptive: false,
      showCharsCounter: true,
      showWordsCounter: true,
      showXPathInStatusbar: false,
      askBeforePasteHTML: true,
      askBeforePasteFromWord: true,
      defaultActionOnPaste: "insert_clear_html",
      buttons: [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        // "ul",
        // "ol",
        "indent",
        "outdent",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "align",
        "undo",
        "redo",
        "cut",
        "copy",
        "paste",
        "table",
        "link",
        "unlink",
        "hr",
        "symbol",
        "fullsize",
        "print",
        "about",
      ],
    }),
    []
  );
  const onChange = useCallback(
    (newContent) => {
      appendLog(`onChange triggered with ${newContent}`);
      setContent(newContent);
    },
    [appendLog]
  );

  useEffect(() => {
    console.log("onChange = ", onChange);
  }, [onChange]);
  useEffect(() => {
    console.log("Category Data", categoryData);
  });

  const onBlur = useCallback(
    (newContent) => {
      appendLog(`onBlur triggered with ${newContent}`);
      setContent(newContent);
    },
    [appendLog, setContent]
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      cardName: name,
      cardImg: file,
      bannerImg: bannerimgFile,
      detailContet: content,
    };
    console.log("Data", formData);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCategoryName = (event) => {
    setCategoryName(event.target.value);
  };
  const handleSubCategoryName = (event) => {
    setSubCategoryName(event.target.value);
  };
  const handleSubCategoryPrice = (event) => {
    setSubCategoryPrice(event.target.value);
  };
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleBannerImgChange = (event) => {
    const selectedFile = event.target.files[0];
    setBannerimgFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setBannerimgPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const addNewCategory = () => {
    setCategoryName("");
    if (subCategoryName !== "" && subCategoryPrice > 0) {
      const newCategory = {
        name: categoryName,
        subcategories: [],
      };
      setCategoryData((prevData) => [...prevData, newCategory]);
    }
  };
  const handleSubCatSave = () => {
    if (
      categoryName !== "" &&
      subCategoryName !== "" &&
      subCategoryPrice !== 0
    ) {
      // Check if the category already exists in the array
      const existingCategoryIndex = categoryData.findIndex(
        (cat) => cat.name === categoryName
      );

      if (existingCategoryIndex !== -1) {
        // Category already exists, update its subcategories
        const updatedCategoryData = [...categoryData];
        updatedCategoryData[existingCategoryIndex].subcategories.push({
          name: subCategoryName,
          price: subCategoryPrice,
        });
        setCategoryData(updatedCategoryData);
      } else {
        // Category doesn't exist, add a new category with the subcategory
        setCategoryData((prevData) => [
          ...prevData,
          {
            name: categoryName,
            subcategories: [
              {
                name: subCategoryName,
                price: subCategoryPrice,
              },
            ],
          },
        ]);
      }
      setSubCategoryName("");
      setSubCategoryPrice(0);
    }
  };
  return (
    <div className="addServiceContainer">
      <div className="serviceForm">
        <form onSubmit={handleSubmit}>
          <div className="formContainer flex flex-col items-start gap-[20px]">
            <h1 className="text-[22px]">Service Card Data</h1>

            <div className="name flex flex-col gap-[5px] w-full">
              <div className="text-[14px]">Enter name of the service </div>
              <textarea
                type="text"
                placeholder="Enter Name ..."
                value={name}
                onChange={handleNameChange}
                className="w-full"
              />
            </div>
            <div className="cardDetails flex flex-col gap-[5px] w-full">
              <div className="text-[14px]">
                Enter Service Description (Card/detail Pg){" "}
              </div>
              <textarea
                type="text"
                placeholder="Enter Description ..."
                value={name}
                onChange={handleNameChange}
                className="w-full"
                rows={5}
              />
            </div>
            <div className="cardImg flex flex-col w-full">
              {imagePreview && (
                <div className="selectedImg md:w-1/3">
                  <img src={imagePreview} alt="Selected" />
                </div>
              )}
              <label htmlFor="fileInput" className="fileLabel cursor-pointer">
                {!imagePreview && (
                  <div className="addText text-[14px]">Add Card Image</div>
                )}
                <div className="addImg text-[50px]">+</div>
              </label>
              <input
                type="file"
                id="fileInput"
                accept=".png, .svg, .jpg, .jpeg"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>

            <div className="descriptionPage">
              <h1 className="text-[22px]">Detail Page Data</h1>
              <div className="bannerImg flex flex-col w-full">
                {bannerimgPreview && (
                  <div className="selectedImg md:w-full">
                    <img src={bannerimgPreview} alt="Selected" />
                  </div>
                )}
                <label
                  htmlFor="bannerfileInput"
                  className="fileLabel cursor-pointer"
                >
                  {!bannerimgPreview && (
                    <div className="addText text-[14px]">Add Banner Image</div>
                  )}
                  <div className="addImg text-[50px]">+</div>
                </label>
                <input
                  type="file"
                  id="bannerfileInput"
                  accept=".png, .svg, .jpg, .jpeg"
                  onChange={handleBannerImgChange}
                  style={{ display: "none" }}
                />
              </div>
              <div className="serviceDetails flex flex-col gap-[5px]">
                <div>Add Service Details</div>
                <JoditEditor
                  value={content}
                  config={config}
                  tabIndex={1}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              </div>
              <div className="serviceCategories py-5">
                <h1 className="text-[22px]">
                  Service Categories With Sub Categories and Prices
                </h1>
                <div className="category">
                  <div
                    className="text-[18px] font-extrabold cursor-pointer py-5"
                    onClick={() => {
                      setCategoryToggle(true);
                    }}
                  >
                    + Add Category
                  </div>
                  {categoryToggle && (
                    <div className="categoryName flex flex-col gap-[5px] w-[33%]">
                      <div className="text-[14px]">Enter Category Name </div>
                      <input
                        type="text"
                        placeholder="Enter Category Name ..."
                        value={categoryName}
                        onChange={handleCategoryName}
                      />
                    </div>
                  )}
                  {categoryName !== "" && (
                    <div className="subCategories py-2 flex flex-col gap-[5px]">
                      <div>Enter Sub category and pricing</div>
                      <div className="pricingSection flex items-center gap-10">
                        <input
                          type="text"
                          placeholder="Sub Category Name ..."
                          value={subCategoryName}
                          onChange={handleSubCategoryName}
                        />
                        <div className="price">
                          <input
                            type="number"
                            placeholder="Price ..."
                            value={subCategoryPrice}
                            onChange={handleSubCategoryPrice}
                          />
                        </div>
                      </div>
                      <div
                        className="saveSubCat cursor-pointer bg-primary text-white px-3 py-1 w-[100px] text-center rounded"
                        onClick={handleSubCatSave}
                      >
                        Save
                      </div>
                      <div
                        className="saveSubCat cursor-pointer bg-primary text-white px-3 py-3 w-[170px] text-center rounded"
                        onClick={addNewCategory}
                      >
                        Add New category
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="submitService pt-3">
            <div
              className="submitBtn cursor-pointer bg-primary text-white px-5 py-2 w-[150px] text-center rounded"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceComp;
