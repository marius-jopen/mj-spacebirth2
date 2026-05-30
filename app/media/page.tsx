import type { Metadata } from "next";
import VideoEmbed from "@/components/VideoEmbed";
import HlsPlayer from "@/components/HlsPlayer";

export const metadata: Metadata = {
  title: "Spacebirth 2 — Media",
};

interface VideoSection {
  title: string;
  description: string;
  type: "youtube" | "vimeo" | "hls";
  videoId: string;
  aspectRatio?: string;
  link?: { href: string; text: string };
}

const videos: VideoSection[] = [
  {
    title: "Teaser I",
    description: "This is the official teaser of Spacebirth 2",
    type: "youtube" as const,
    videoId: "os2BYnhn0Ps",
    aspectRatio: "56.5%",
  },
  {
    title: "Teaser II",
    description: "This is the second official teaser of Spacebirth 2",
    type: "youtube" as const,
    videoId: "OKqWH087-Zc",
    aspectRatio: "56.5%",
  },
  {
    title: "Seed & Spark Teaser",
    description: "A teaser for our Seed & Spark campaign",
    type: "youtube" as const,
    videoId: "HYq4Z65jS68",
    aspectRatio: "56.5%",
  },
  {
    title: "Seed & Spark campaign",
    description: "Our Seed & Spark crowdfunding video",
    type: "youtube" as const,
    videoId: "1H6OfKVPDQY",
    aspectRatio: "56.5%",
  },
  {
    title: "onboarding I",
    description: "Onboarding video for our DOP,",
    type: "hls" as const,
    videoId:
      "https://vz-42c02503-371.b-cdn.net/4cd0bc7d-b398-4e2a-a3d2-010dc7ff6995/playlist.m3u8",
    aspectRatio: "56.34%",
    link: { href: "https://instagram.com/jamietouche/", text: "Jamie Touch" },
  },
  {
    title: "onboarding II",
    description: "An update video of the postproduction. Also for our DOP.",
    type: "hls" as const,
    videoId:
      "https://vz-42c02503-371.b-cdn.net/cb3e45ae-4804-4951-8547-3562218d2362/playlist.m3u8",
    aspectRatio: "56.34%",
  },
  {
    title: "flymaster",
    description: "This is how everything started. Flymaster original.",
    type: "youtube" as const,
    videoId: "ZKjMcjFavGQ",
    aspectRatio: "56.5%",
  },
];

export default function MediaPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      {/* Page Title */}
      <section className="page-container mb-[7%]">
        <h1 className="text-page-title">Media</h1>
      </section>

      {/* Video sections */}
      {videos.map((video) => (
        <section key={video.videoId} className="page-container mb-[7%]">
          <div className="grid grid-cols-12 gap-x-[1%]">
            <div className="col-span-12 sm:col-span-8 sm:col-start-3">
              <h3 className="text-h1 mb-4">{video.title}</h3>
              <p className="text-body text-center mb-6">
                {video.description}
                {video.link && (
                  <>
                    {" "}
                    <a
                      href={video.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {video.link.text}
                    </a>
                  </>
                )}
              </p>
              <div className="video-embed-outline">
                {video.type === "hls" ? (
                  <HlsPlayer src={video.videoId} aspectRatio={video.aspectRatio} />
                ) : (
                  <VideoEmbed type={video.type} videoId={video.videoId} aspectRatio={video.aspectRatio} />
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}
