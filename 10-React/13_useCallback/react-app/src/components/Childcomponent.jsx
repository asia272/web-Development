import React from 'react'

const Childcomponent = React.memo( (props) => {
    console.log("child components is rerender")

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.btnName}
        
      </button>
    </div>
  )
})

export default Childcomponent

// banifits of React.memo

//agr parent elemtn ki value change ho rhi ho
//or child elemnt ki value same rhy
// tu child elemnt ko rerender hony sy bachany ky lia 
// React.memo use krty hy . Asa krny sy 
//Child element sirf tb hi rerender ho ga jb es ki value ma koi change ho

//but if child element use function?
//agr child element koi function use kr rha ho tu function
//hamesha change ho kr ata hy. Q ky function ka refrence
//rerender hony pr change ho jata.or refrens change hony ki wja sy
// wo new function ki bn jata hy
//jis ki wja sy React.memo os ko ek new function smjta hy
//or child componenets ko render kr deta hy.

//what we do for refrence stoping of function/ or freez function
// we use callBack()  hook
// callBack hook function ko sirf ka rafrence sirf tb hi 
// change kry gi jb os funciton ko value ma koi change ho