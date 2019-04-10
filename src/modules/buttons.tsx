import { Button, ButtonColors } from "@kata-kit/button";
import * as React from 'react';

export function RightButton({ text = "+ Add", onClick = () => { }, color = "primary" }) {
    return (
        <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <Button color={color as ButtonColors} onClick={onClick}>{text}</Button>
        </div>
    );
}
