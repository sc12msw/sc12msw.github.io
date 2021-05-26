export const Container = ({ children, ...props }) => {
    return (
        <div
            className={`${
                props.backgroundClass ? props.backgroundClass : ""
            } min-h-screen flex flex-col`}
        >
            {children}
        </div>
    );
};
