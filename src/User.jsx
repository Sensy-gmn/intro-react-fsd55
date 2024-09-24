export default function User({ prenom, nom, age, image }) {
    const isAuthentificated = true;

    return (
        <div
            style={{
                backgroundColor: "grey",
                margin: "1rem",
                borderRadius: "1rem",
            }}
        >
            {isAuthentificated ? (
                <>
                    <h1 style={{ color: "green" }}>
                        Hello Welcome to the Project {prenom} {nom} agé de {age}
                        ans
                    </h1>
                    <img src={image} alt={prenom} />
                </>
            ) : (
                <>
                    <h1 style={{ color: "red" }}>
                        Welcome to the Project, please sign in to continue...
                    </h1>
                </>
            )}
        </div>
    );
}
