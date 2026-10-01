import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "이윤재 | Corilla 포트폴리오",
    short_name: "Corilla",
    description:
      "보안 엔지니어이자 웹 개발자 이윤재(Corilla)의 프로젝트 포트폴리오",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "ko-KR",
    icons: [
      {
        src: "/Corilla.png",
        sizes: "400x400",
        type: "image/png",
      },
    ],
  };
}

