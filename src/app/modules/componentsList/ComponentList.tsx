import { Outlet, Route, Routes } from "react-router-dom";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import InputField from "./input/InputField";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import TextAreaMain from "./textArea/TextAreaMain";
import DropDown from "./dropDown/DropDown";
import MultiDropDown from "./multiDropDown/MultiDropDown";
import CheckedBox from "./checkedBox/CheckedBox";
import Radio from "./radio/Radio";
import DatePicker from "./datePicker/DatePicker";
import UploadFile from "./uploadFile/UploadFile";
import TableTemplate from "./table/TableTemplate";
import CommonModal from "./modal/CommonModal";
import DateRangePicker from "./dateRangePicker/DateRangePicker";

const componentsBreadCrumbs: Array<PageLink> = [
  {
    title: "Component",
    path: "/crafted/components/input",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const ComponentList = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <ToolbarWrapper />
              <Outlet />
            </>
          }
        >
          <Route
            path="input"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>Input</PageTitle>
                <InputField />
              </>
            }
          />
          <Route
            path="textArea"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>
                  Text Area
                </PageTitle>
                <TextAreaMain />
              </>
            }
          />
          <Route
            path="dropDown"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>
                  Select
                </PageTitle>
                <DropDown />
              </>
            }
          />
          <Route
            path="multiDropDown"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>
                  Multi Select
                </PageTitle>
                <MultiDropDown />
              </>
            }
          />
          <Route
            path="checkedBox"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>
                  Check Box
                </PageTitle>
                <CheckedBox />
              </>
            }
          />
          <Route
            path="radio"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>
                  Radio Button
                </PageTitle>
                <Radio />
              </>
            }
          />
          <Route
            path="datepicker"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>
                  Radio Button
                </PageTitle>
                <DatePicker />
              </>
            }
          />
          <Route
            path="upload-file"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>
                  Upload
                </PageTitle>
                <UploadFile />
              </>
            }
          />
          <Route
            path="table"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>Table</PageTitle>
                <TableTemplate />
              </>
            }
          />
          <Route
            path="modal"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>Modal</PageTitle>
                <CommonModal />
              </>
            }
          />
          <Route
            path="date-range"
            element={
              <>
                <PageTitle breadcrumbs={componentsBreadCrumbs}>
                  Date Range Picker
                </PageTitle>
                <DateRangePicker />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default ComponentList;
