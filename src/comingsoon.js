const ComingSoonPage = () => {
  return (
    <section className="hero coming-soon is-fullheight">
      <div className="hero-body coming-page">
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column is-three-quarters">
              <img
                src="./Images/Mulecraftlogo.png"
                alt="company-logo"
                height={100}
                width={100}
              />
              <h1 className="title has-text-white is-size-5 mt-3">
                MuleCraft India Pvt Limited
              </h1>
              <h1 className="title has-text-white is-size-5 mt-3">
                We are glad to inform you that our Community Edition of Anypoint
                Platform is coming soon.
              </h1>
              <p className="subtitle has-text-white is-size-5 mt-3">
                We are working our best. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonPage;
