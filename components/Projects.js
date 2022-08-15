import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [open, isOpen] = useState(false);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="my-12" id="projects">
      <SectionHeader
        name={"Projects"}
        title={"Discover the latest Interior Design available today"}
      />
      <div className="container mx-auto">
        <div className="py-8 lg:px-0 px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {projects?.map((project) => (
              <div key={project._id}>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure>
                    {open ? (
                      <Lightbox
                        mainSrc={[project.thumbnail]}
                        onCloseRequest={() => isOpen(false)}
                      />
                    ) : (
                      <picture>
                        <img
                          src={project.thumbnail}
                          alt={project._id}
                          className="h-[396px] w-[368px] object-cover rounded-lg"
                          onClick={() => isOpen(true)}
                        />
                      </picture>
                    )}
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title justify-center">
                      {project.title}
                    </h2>
                    <p className="flex gap-x-2 justify-center">
                      <picture>
                        <img
                          src="/assets/projects/location.svg"
                          alt="location"
                        />
                      </picture>
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
