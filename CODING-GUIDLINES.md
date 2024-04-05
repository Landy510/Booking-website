# CODING GUIDELINES
## General 
+ 使用 React hook component
+ 元件宣告請使用 **function declaration** 的方式做宣告 <br>
e.g.
```
// ✅ 請這樣宣告
function Child() {
    return (
        <div>Child content</div>
    )
}

// ❌ 不要這樣宣告
const Child = () => {
    return (
        <div></div>
    )
}
```

+ 元件定義檔內的各資源的引入順序: <br>
e.g.
```
import React from 'react'
import { NavLink } from 'react-router-dom'

// assets
import Icon from './assets/icon.png'

// styles
import styles from './style.module.css'

// helpers
import { calculator } from './helpers'

// hooks
import { useFetchData } from './hooks'

// components
import Header from 'components/Header'

// component definition export
function Home() {
    return (
        <div>
            content
        </div>
    )
}

export default Home;
```

+ 元件定義檔內的各類型變數定義擺放的順序: <br>
e.g.
```
... imports

function SomeComponent() {
    ... useState
    
    ... custom hooks
    
    ... useMemo
    
    ... useCallback(render function)
    
    ... useEffect
    
    ... other code
    
    return
    
}

... exports
```

+ 各元件專屬的 css 樣式，請使用 module css 的方式做撰寫(e.g. `SomeComponent.module.scss`) <br>
e.g.
```
import styles from './SomeComponent.module.scss'

function SomeComponent() {
    return (
        <div className={styles['layout']}>
            <div className={styles['content']}>
                content
            <div>
        </div>
    )
}
```