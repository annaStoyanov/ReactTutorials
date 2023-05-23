const Session = ({ title, roomName }) => {
    return (
        <span className="session w-100">
            {title}{" "}
            <strong>Room: {roomName}</strong>
        </span>
    );
}

const Sessions = ({ sessions }) => {
    //return (sessions.map((s) => {
    //    <div key={s.id} className="sessionBox card h-250">
    //        <Session title={s.title} roomName={s.room.name} />
    //    </div>
    //}));

    return (
        <div className="sessionBox card h-250">
            <Session title={sessions[0].title} roomName={sessions[0].room.name} />
        </div>
    );
}

const SpeakerImage = ({ id, first, last }) => {
    return (
        <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                src={`/images/speaker-${id}.jpg`}
                width="300"
                alt={`${first} ${last}`}
            />
        </div>
    );
}

const Speaker = ({ speaker }) => {
    const {
        id,
        bio,
        first,
        last,
        favorite,
        twitterHandle,
        company,
        sessions,
    } = speaker;

    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-4 mt-4">
                <SpeakerImage id={id} first={first} lat={last} />
                <SpeakerInfo first={first} last={last} bio={bio} company={company} twitterHandle={twitterHandle} />
            </div>
            <Sessions sessions={sessions} />
        </div>
    );
}

const SpeakerInfo = ({ first, last, bio, company, twitterHandle, favorite }) => {
    return (

        <div className="speaker-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {first} {last}
                </h3>
            </div>
            <div>
                <p className="card-description">
                    {bio}
                </p>
                <div className="social  d-flex flex-row mt-4">
                    <div className="company">

                        <h5>Company</h5>
                        <h6>{company}</h6>
                    </div>
                    <div className="twitter">

                        <h5>Twitter</h5>
                        <h6>{twitterHandle}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Speaker;