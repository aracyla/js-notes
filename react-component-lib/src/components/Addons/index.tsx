interface IAddons {
    items: any[];
};

const Addons: React.FC<IAddons> = ({ items, ...rest }) => {
    return (
        <div className="field has-addons">
            {items.map((item) => {
                return (
                    <p className="control">
                        {item}
                    </p>
                );
            })}
        </div>
    );
};

export default Addons;
