import { useEffect, useState } from "react";


function useDebounce(value,delay){//사용자가 검색어를 입력할 때마다 API 요청을 보내는 대신, 입력이 잠시 멈춘 후에 요청을 보냅니다
    const [debouncedValue, setDebounceValue] = useState(value)

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceValue(value)
        },delay)

        return ()=>{
            clearTimeout(handler)
        }
    },[value,delay])

    return debouncedValue 
}

export default useDebounce

// useDebounce 훅의 작동 방식 
// 1.	입력값 변경: 사용자가 입력 필드에 값을 입력하면 즉시 로컬 상태가 업데이트됩니다.
// 2.	대기 시간: useDebounce 훅은 설정된 지연 시간(예: 500ms) 동안 기다립니다.
// 3.	값 업데이트: 지연 시간 동안 추가 입력이 없으면 debouncedValue가 새 값으로 업데이트됩니다.
// 4.	반환: 업데이트된 debouncedValue가 훅에서 반환되어 컴포넌트에서 사용됩니다.

// 예를 들어, 검색 기능에서 사용자가 “react”를 입력한다고 가정해봅시다:
// 	1.	사용자가 ‘r’을 입력: 로컬 상태는 즉시 ‘r’로 업데이트되지만, debouncedValue는 아직 변경되지 않습니다.
// 	2.	사용자가 빠르게 ‘e’, ‘a’, ‘c’, ‘t’를 입력: 로컬 상태는 각 입력마다 업데이트되지만, debouncedValue는 여전히 변경되지 않습니다.
// 	3.	마지막 ‘t’ 입력 후 지연 시간(예: 500ms)이 지나면: debouncedValue가 최종적으로 ‘react’로 업데이트됩니다.