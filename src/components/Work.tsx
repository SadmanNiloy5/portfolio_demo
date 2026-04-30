import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!box || box.length === 0 || !container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentElement = box[0].parentElement;
      if (!parentElement) return;

      const parentWidth = parentElement.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => {
          setTranslateX();
          return `+=${translateX}`;
        }, // Use function to recalculate
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true, // Recalculate on resize
      },
    });

    timeline.to(".work-flex", {
      x: () => {
        setTranslateX();
        return -translateX;
      }, // Use function
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            { name: "SADMAN CINEPLEX", category: "Web Application", tools: "OOP, CRUD Operations, Authentication", link: "https://github.com/SadmanNiloy5/SADMAN-CINEPLEX" },
            { name: "AGRIMART", category: "Web Application", tools: "Clean Architecture, CRUD Operations", link: "https://github.com/SadmanNiloy5/AGRIMART" },
            { name: "Smart Expense Tracker", category: "Web Application", tools: "Category Insights", link: "https://github.com/SadmanNiloy5/Smart-Expense-Tracker" },
            { name: "Realtime Chat Application", category: "Messaging App", tools: "Real-time Messaging", link: "https://github.com/SadmanNiloy5/Realtime-Chat-Application" },
            { name: "Task Management REST API", category: "Backend API", tools: "REST API Operations", link: "https://github.com/SadmanNiloy5/Task-Management-REST-API" }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
