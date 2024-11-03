import ProjectList from "@/app/about/projects/components/project-list";
import { Suspense } from "react";
import Loading from "./components/loading";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./error";

export default async function Page() {
    return(
        <div>
            <h1 className="mb-8 text-xl">Projects</h1>
            <div className="mb-8">Hello, this is a list of my repos.</div>
            <ErrorBoundary fallback={<div>Cannot fetch projects currently...</div>}>
                <Suspense fallback={<Loading/>}>
                    <ProjectList />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}