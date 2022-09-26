import { Layout } from "../../shared_components/layout";
import ChefsTeam from "./TeamComponents/teamChefSection";
import TeamWelcome from "./TeamComponents/teamWelcomeSection";

export function TeamPage(){
    return(
        <Layout>
        <TeamWelcome/>
        <ChefsTeam/>
        </Layout>
    )
}