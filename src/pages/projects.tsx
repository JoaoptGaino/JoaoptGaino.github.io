import GithubProjectsItem from "@/components/items/GithubProjectsItem";
import { api } from "@/services/api";
import { GithubApiResponse } from "@/types";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<GithubApiResponse[]>([]);

  const getProjects = async () => {
    const response = await api.get(
      `/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`
    );
    if (response.data) {
      setProjects(response.data);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Head>
        <title> JoaoptGaino | Projects</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/assets/logo_dark_theme.png" />
      </Head>
      <div className="w-full h-screen text-center flex flex-col">
        <div className="max-w-[1240px] mt-10 mx-auto px-2 py-16">
          <h2 className="py-4 text-gray-700">Checkout my Github projects</h2>
          <div className="grid my-20 md:grid-cols-4 gap-8">
            {projects.map((project) => (
              <GithubProjectsItem
                key={project.id}
                name={project.name}
                fullName={project.full_name}
                description={project?.description}
                stars={project.stargazers_count}
                url={project.html_url}
                forks={project.forks_count}
                language={project.language}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
