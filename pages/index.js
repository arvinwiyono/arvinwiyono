import ContentContainer from "../components/ContentContainer/ContentContainer";
import ExternalLink from "../components/ExternalLink";
import Image from "../components/Image";
import PageLayout from "../components/PageLayout/PageLayout";
import PulsingText from "../components/PulsingText";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <PageLayout pageTitle="Home" pageDescription="Arvin Wiyono's homepage">
      <ContentContainer>
        <h1 className={styles.homeHeading}>
          I build{" "}
          <PulsingText bolded color="#659fd3">
            websites
          </PulsingText>
          ,
          <br />I make{" "}
          <PulsingText bolded color="#49bda8">
            guitar covers
          </PulsingText>
          ,
          <br />I sometimes take{" "}
          <PulsingText bolded color="#bd9649">
            photos
          </PulsingText>
          .
        </h1>
      </ContentContainer>

      <ContentContainer>
        <div className="sm:flex items-end">
          <Image
            rounded
            shadowLarge
            src="/profile-picture.png"
            alt="Arvin Wiyono's profile picture"
          />
          <h2 className="leading-tight text-2xl">
            <span className="italic">Halo</span>,
            <br />I am <span className="font-semibold">Arvin Wiyono</span>
            <br />
            <span className="text-sm text-body-text-secondary">
              ... or commonly known as <code>@awiy1</code>.
            </span>
          </h2>
        </div>
      </ContentContainer>

      <ContentContainer>
        <p>
          I am a web developer based in Melbourne, Australia. I graduated as the{" "}
          <ExternalLink url="https://www.monash.edu/it/about-us/news-and-events/latest/articles/2018/outstanding-fit-students-recognised">
            DUX of BSE from Monash University in 2018
          </ExternalLink>{" "}
          and I am fairly new in the software engineering industry.
        </p>
        <p>
          A big passion of mine is creating beautiful software that solves
          real-world problems for real people.
        </p>
        <p>
          I am currently working as a software developer at{" "}
          <ExternalLink url="https://au.jora.com">jora.com</ExternalLink> - part
          of <ExternalLink url="https://seek.com.au">seek.com.au</ExternalLink>{" "}
          - helping people live more fulfilling working lives by serving them
          millions of jobs worldwide. I work with{" "}
          <span className="font-semibold">Ruby on Rails</span>,{" "}
          <span className="font-semibold">JavaScript</span>, and{" "}
          <span className="font-semibold">Sass</span>.
        </p>
        <p>
          Let me know if you have any cool projects that I can help with! 😁
        </p>
      </ContentContainer>

      <ContentContainer>
        <div className={styles.mediaLinks}>
          <p>You can find me or say hi on:</p>
          <ExternalLink url="https://github.com/arvinwiyono">
            <span className="jam jam-github"></span>
            <span className={styles.linkDescription}>My GitHub profile</span>
          </ExternalLink>
          <ExternalLink url="https://www.linkedin.com/in/arvin-wiyono-80b5bba7/">
            <span className="jam jam-linkedin"></span>
            <span className={styles.linkDescription}>My LinkedIn profile</span>
          </ExternalLink>
          <ExternalLink url="https://www.youtube.com/watch?v=S6-mynCaNwk">
            <span className="jam jam-youtube"></span>
            <span className={styles.linkDescription}>
              My Youtube guitar cover
            </span>
          </ExternalLink>
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
