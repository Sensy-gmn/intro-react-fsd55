export default function User() {
    const prenom = "Alexandre";
    const nom = "Goumain";
    const age = 23;

    const isAuthentificated = true;
    const info = `Welcome to the Project ${prenom} ${nom} agé de ${age} ans`;
    const infoNotConnected = `Welcome to the Project, please sign in to continue...`;

    return (
        <>
            {isAuthentificated ? (
                <>
                    <h1 style={{ color: "green" }}>{info}</h1>
                </>
            ) : (
                <>
                    <h1 style={{ color: "red" }}>{infoNotConnected}</h1>
                </>
            )}
        </>
    );
}
