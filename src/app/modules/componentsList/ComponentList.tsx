import { Outlet, Route, Routes } from "react-router-dom";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import InputField from "./input/InputField";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import TextAreaMain from "./textArea/TextAreaMain";

const componentsBreadCrumbs: Array<PageLink> = [
    {
      title: 'Component',
      path: '/crafted/components/input',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]

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
                <PageTitle breadcrumbs={componentsBreadCrumbs}>Text area</PageTitle>
                <TextAreaMain />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default ComponentList;
