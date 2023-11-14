import { useEffect, useState } from "react";

const usemenu = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenus(data))
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [])

    return [menus, loading]
}

export default usemenu;