import Categories from "./sections/categories";
import LastQuestions from "./sections/last-questions";
import Articles from "./sections/articles";
import LastUsers from "./sections/last-users";
import SocialCard from "~/components/cards/social";
import OpacityContent from "~/components/animated/opacity";

export default function Home() {
  return (
    <OpacityContent className="max-w-[1200px] mx-auto">

      <Categories />

      <SocialCard
        type="twitter"
        ctaUrl="https://twitter.com/Karani"
      />

      <LastQuestions />
      <Articles />

      <SocialCard
        type="instagram"
        ctaUrl="https://instagram.com/muhammad_ormdv"
      />

      <LastUsers />

      <SocialCard
        type="telegram"
        ctaUrl="https://t.me/Karani"
        ctaText="Gruba Katıl"
      />

    </OpacityContent>
  )
}
