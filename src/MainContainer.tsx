import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import ComingSoon from "./components/notices/ComingSoon";
import MaintenanceNotice from "./components/notices/MaintenanceNotice";
import { pageStates } from "./constants";
import { MainScrollContext } from "./contexts/Scroll";
import { useState } from "react";
import { cn } from "./utils";

function MainContainer() {
  const [isScrollVisible, setIsScrollVisible] = useState(true);

  const { PREPARING, ACTIVE, MAINTENANCE } = pageStates;

  const pathname = location.pathname;

  const currentPageState: (typeof pageStates)[keyof typeof pageStates] =
    !pathname ? PREPARING : pathname ? ACTIVE : MAINTENANCE;

  return (
    <div
      className={cn(
        "h-screen flex flex-col",
        isScrollVisible ? "overflow-y-scroll" : "overflow-y-hidden"
      )}
    >
      <Nav />
      <div className="flex flex-1 flex-col">
        {currentPageState === PREPARING ? (
          <ComingSoon />
        ) : currentPageState === MAINTENANCE ? (
          <MaintenanceNotice />
        ) : (
          <MainScrollContext.Provider
            value={{ isScrollVisible, setIsScrollVisible }}
          >
            <Outlet />
          </MainScrollContext.Provider>
        )}
      </div>
      {/* <SideNav containerStyle="absolute top-1/2 left-0" /> */}
    </div>
  );
}

export default MainContainer;
