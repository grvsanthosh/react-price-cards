function Card({ val }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {val.plan}
            </h5>
            <h6 className="card-price text-center">
              ${val.price}
              <span className="period">/month</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li className={val.userEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      val.userEnabler ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {val.plan === "PLUS" || val.plan === "PRO" ? (
                  <strong>{val.user}</strong>
                ) : (
                  val.user
                )}
              </li>
              <li className={val.storageEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      val.storageEnabler ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {val.storage}
              </li>
              <li className={val.publicProjectsEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      val.publicProjectsEnabler
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>
                {val.publicProjects}
              </li>
              <li className={val.communityAccessEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      val.communityAccessEnabler
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>
                {val.communityAccess}
              </li>
              <li className={val.privateProjectsEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      val.privateProjectsEnabler
                        ? "fas fa-check"
                        : "fas fa-times"
                    }
                  ></i>
                </span>
                {val.privateProjects}
              </li>
              <li className={val.supportEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      val.supportEnabler ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {val.support}
              </li>
              <li className={val.subDomainEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      val.subDomainEnabler ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {val.plan === "PRO" ? <strong>Unlimited </strong> : <></>}
                {val.subDomain}
              </li>
              <li className={val.reportsEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i
                    className={
                      val.reportsEnabler ? "fas fa-check" : "fas fa-times"
                    }
                  ></i>
                </span>
                {val.reports}
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
