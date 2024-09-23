export default function User() {
    const prenom = "Alexandre";
    const nom = "Goumain";
    const age = 23;

    return (
        <>
            {age >= 18 ? (
                <>
                    <h1>
                        Helo my name is : {prenom} {nom} and i&apos;m {age}
                        years old
                    </h1>
                    <p>Voici ma belle description</p>
                </>
            ) : (
                <>
                    <h1>
                        Helo my name is : {prenom} {nom} and i&apos;m {age}
                        years old
                    </h1>
                    <p>Trop jeune mince !</p>
                </>
            )}
        </>
    );
}
