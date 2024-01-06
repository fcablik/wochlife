//* base containers, spacings, etc.
export const pagesContentContainerClassList =
	'md:max-w-[93%] lg:max-w-[90%] 2xl:max-w-[88%] 7xl:max-w-[1600px] max-md:mx-3 md:mx-auto'

export const adminDetailBoxesClassList =
	'shadow-admin-detail-box p-8 rounded-xl'

export const frontendRoutesSpacingFromHeaderAndFooter =
	'max-md:px-2 pt-16 md:pt-8 lg:pt-12 pb-24 md:pb-24 lg:pb-32'

//* boxes styling
export const boxProps =
	'flex flex-col rounded-3xl lg:rounded-6xl pt-4 px-4 md:px-5 md:pt-6'
export const darkBoxBgClassList = boxProps + ' bg-dark-gradient'
export const purpleBoxBgClassList = boxProps + ' bg-purple-box-gradient'
export const purpleBoxBg40ClassList = boxProps + ' bg-purple-box-gradient-40'

export const darkContentBoxBgClassList =
	'flex flex-col rounded-3xl lg:rounded-6xl p-4 md:p-5 xl:p-8 bg-dark-gradient'

//* box items inside boxes
export const boxInnerContentBoxProps =
	'custom-box-in-box-sizes flex items-center mb-3 4xl:mb-4'

export const darkBoxInnerContentBox =
	boxInnerContentBoxProps +
	' bg-foreground/10 hover:bg-foreground hover:text-background cursor-pointer transition-colors duration-500 p-2 rounded-xl'

export const purpleBoxInnerContentBox =
	boxInnerContentBoxProps +
	' bg-highlight-dark/30 hover:bg-highlight-dark transition-colors duration-500 p-2 cursor-pointer rounded-xl'
export const purpleBoxInnerContentBox40 =
	boxInnerContentBoxProps +
	' md:hover:bg-highlight-dark transition-colors duration-500 p-2 cursor-pointer rounded-xl'

//* box items content
export const innerContentBoxTexts =
	'no-scrollbar overflow-x-scroll whitespace-nowrap'

export const innerContentBoxWrapperCommonStyles =
	'no-scrollbar overflow-y-scroll rounded-xl-to-2xl'
export const innerContentBoxWrapperOfBoxesInBox =
	innerContentBoxWrapperCommonStyles + ' custom-content-sections-height '
export const innerContentBoxWrapperOfBoxesInBox2 =
	innerContentBoxWrapperCommonStyles + ' pb-4'

export const boxInnerContentBoxInnerBox =
	'custom-box-in-box-in-box-sizes rounded-lg-to-xl bg-cover bg-contain'
export const bigBoxTitle = 'capitalize text-center text-2xl font-semibold mb-6'

//* content routes (portfolio, projects, about)
export const contentsRouteSelectorCol1 =
	'md-to-lg:max-w-[300px] xl:max-w-[320px] sm:max-md-to-lg:w-1/2 md-to-lg:w-[35%] lg:w-[32%] lg-to-xl:w-[29%] xl:w-[26.502%]'
export const mobContentsRouteSelectorCol1 =
	'max-sm:w-[90%] transition-opacity duration-500 fixed bottom-20 z-2000 max-sm:left-5 sm:right-16 ' +
	contentsRouteSelectorCol1
export const contentsRouteContentCol2 =
	'w-full md-to-lg:w-[65%] lg:w-[68%] lg-to-xl:w-[71%] xl:w-[73.498%] flex flex-col'
export const contentsRouteWrapper =
	'mx-auto flex gap-8 max-xl:px-4 max-md-to-lg:flex-col md:max-xl:mx-8 xl:max-w-[1250px] 2xl:max-w-[1350px] 4xl:max-w-[1450px]'
export const contentRouteSelectorContentBoxes =
	'max-md-to-lg:ml-3 md-to-lg:ml-6 flex max-w-[67%] flex-col'

export const destructiveModalWrapperClassList =
	'absolute left-1/2 top-20 z-3001 w-full max-w-1/3 -translate-x-1/2 rounded-xl border-4 border-destructive bg-white p-4'
