import VideoPlayer from "@/components/video/VideoPlayer"
import TeamBanner from "@/components/team/teambanner/TeamBanner"
import JoiningDetails from "@/components/team/joining/JoiningDetails"
import Head from "next/head"


export default function TeamPage() {

    return <>
        <Head>
            <title>Muscle-Tech Team</title>
            <meta name='Muscle-Team' content='Muscle-Tech Team' />

        </Head>
        <VideoPlayer />
        <TeamBanner />
        <JoiningDetails />
    </>
}