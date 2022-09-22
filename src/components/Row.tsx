const Row = (props: { character: string }) => {
    const { character } = props;
    return (
        <div className="row">
            <div className="center-dashed-line"/>
            <div className="letter letter--full">{character}</div>
            <div className="letter letter--dashed">{character}</div>
        </div>
    );
};

export default Row;
