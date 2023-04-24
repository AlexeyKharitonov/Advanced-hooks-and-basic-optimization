import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <>
            <CollapseWrapper title="Упражнение">
                <p className="mt-3">
                    У вас есть компоненты Списка. Вам необходимо к каждому из
                    них добавить порядковый номер, относительно того, как они
                    располагаются на странице. Вы можете использовать как{" "}
                    <code>React.Children.map</code> так и{" "}
                    <code>React.Children.toArray</code>
                </p>
                <ComponentOfList>
                    <Component />
                    <Component />
                    <Component />
                </ComponentOfList>
            </CollapseWrapper>
        </>
    );
};

const ComponentOfList = ({ children }) => {
    return (
        <div>
            {React.Children.map(children, (child, index) => (
                <span key={index}>
                    {index + 1}.{child}
                </span>
            ))}
        </div>
    );
};

ComponentOfList.propTypes = {
    children: PropTypes.node
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
