const ContentBlock: React.FC = ({ children, ...rest }) => {
    return (
        <div className="block">
            {children}
        </div>
    );
};

export default ContentBlock;
