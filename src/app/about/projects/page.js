import ProjectList from "@/app/about/projects/components/project-list";
import { Suspense } from "react";
import Loading from "./components/loading";

export default async function Page() {
    return(
        <div>
            <h1 className="mb-8 text-xl">Projects</h1>
            <div className="mb-8">Hello, this is a list of my repos.</div>
            <Suspense fallback={<Loading/>}>
                <ProjectList />
            </Suspense>
        </div>
    )
}