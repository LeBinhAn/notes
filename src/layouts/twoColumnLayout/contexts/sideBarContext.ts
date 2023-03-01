import { createContext } from 'react'

interface ISideBarContext {
	isSideBarShow: boolean
	setIsSideBarShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideBarContext = createContext<ISideBarContext>({
	isSideBarShow: false,
	setIsSideBarShow: () => {}
})
