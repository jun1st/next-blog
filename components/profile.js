import { siteMeta } from "../blog.config";

const Profile = () => (
  <div className="h-card profile">
    <img
      className="u-photo"
      src="/static/bio-photo.jpg"
      alt={siteMeta.author}
    />

    <div>
      <p>
        Hi, I'm{" "}
        <a className="u-url p-name" href={siteMeta.siteUrl} rel="me">
          {siteMeta.author}
        </a>
      </p>
      <p className="p-note">
        网名 fengd，一个程序员，数码爱好者，写过 ruby, iOS, 目前主要从事 Java
        后端开发, 熟悉 Spring 系
      </p>
      <p className="p-note"></p>
    </div>
    <style jsx>{`
      .profile {
        display: flex;
        align-items: center;
        padding: 1em;
        background-color: #eee;
      }

      img {
        width: 5em;
        height: 5em;
        margin-right: 0.5em;
      }

      p:last-child {
        margin-bottom: 0;
      }
    `}</style>
  </div>
);

export default Profile;
