import { useState, useEffect } from "react";

const Count = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById("container");
      if (window.scrollY > container.offsetTop - window.innerHeight + 200 && !isCounting) {
        setIsCounting(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (isCounting) {
      const incrementYears = setInterval(() => {
        setYearsCount((prev) => {
          if (prev < 20) {
            return prev + 1;
          } else {
            clearInterval(incrementYears);
            return 20;
          }
        });
      }, 100);

      const incrementProjects = setInterval(() => {
        setProjectsCount((prev) => {
          if (prev < 20) {
            return prev + 1;
          } else {
            clearInterval(incrementProjects);
            return 20;
          }
        });
      }, 100);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isCounting]);

  return (
    <div id="container" className="flex w-full px-8 p-12 justify-evenly bg-black bg-opacity-40">
      <div className="counter flex flex-col space-y-3 items-center justify-center">
        <h1 className="count">{yearsCount}</h1>
        <p>Years</p>
      </div>
      <div className="counter flex flex-col space-y-3 items-center justify-center">
        <h1 className="count">{projectsCount}</h1>
        <p>Projects</p>
      </div>
    </div>
  );
};

export default Count;
