import Row from "./Row";

const Preview = (props: { characters: string[] }) => {
    const { characters } = props;

    return (
        <div className="preview">
            {characters.map((letter: string) => (
                <Row key={letter} character={letter} />
            ))}
        </div>
    );
};

export default Preview;
