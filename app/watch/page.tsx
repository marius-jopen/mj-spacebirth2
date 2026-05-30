import type { Metadata } from "next";
import HlsPlayer from "@/components/HlsPlayer";

export const metadata: Metadata = {
  title: "Spacebirth 2 — Watch the Film",
};

export default function WatchPage() {
  return (
    <div className="pt-[100px] sm:pt-[120px]">
      <section className="page-container mb-[5%]">
        <h1 className="text-page-title">Watch the Film</h1>
      </section>

      <section className="mb-[5%]">
        <HlsPlayer
          src="https://vz-42c02503-371.b-cdn.net/8baf6539-c6fb-4ddc-8967-8a9cdcd26b66/playlist.m3u8"
          aspectRatio="42.33%"
          className="!rounded-none"
          noRounding
        />
      </section>

      <section className="page-container">
        <p className="text-body text-center">
          If you want to screen the movie in one of your cinemas, please{" "}
          <a href="mailto:mail@mariusjopen.com">contact us</a>.
        </p>
      </section>
    </div>
  );
}
