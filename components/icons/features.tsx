import { HTMLAttributes } from 'react';

type IconProps = HTMLAttributes<SVGElement>;

export const Icons = {
	Call: (props: IconProps) => (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M19.0621 20.2183C17.1077 22.1726 12.1028 20.3363 7.88327 16.1167C3.66372 11.8972 1.82739 6.89227 3.7817 4.93795L5.06847 3.65118C5.9568 2.76286 7.42054 2.78634 8.33784 3.70363L10.3309 5.69672C11.2482 6.61401 11.2717 8.07776 10.3834 8.96609L10.107 9.24247C9.62737 9.72209 9.58045 10.4958 10.0261 11.0359C10.456 11.5568 10.9194 12.0756 11.4219 12.5781C11.9244 13.0806 12.4432 13.544 12.9641 13.9739C13.5042 14.4196 14.2779 14.3726 14.7575 13.893L15.0339 13.6166C15.9222 12.7283 17.386 12.7518 18.3033 13.6691L20.2964 15.6622C21.2137 16.5795 21.2371 18.0432 20.3488 18.9315L19.0621 20.2183Z'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
		</svg>
	),
	Layers: (props: IconProps) => (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M17.7189 9.52728L19.8442 10.677L20.2891 10.9269C21.237 11.4595 21.237 12.8325 20.2891 13.365L14.2525 16.7566C12.8524 17.5432 11.1476 17.5432 9.74754 16.7566L3.71092 13.365C2.76302 12.8325 2.76303 11.4595 3.71093 10.9269L4.15585 10.677L6.16334 9.52728M18.1811 14.6461L20.1129 15.6185C21.1092 16.1201 21.1412 17.5398 20.1685 18.0862L14.2525 21.4101C12.8524 22.1966 11.1476 22.1966 9.74754 21.4101L3.9178 18.1347C2.9284 17.5789 2.98291 16.1278 4.0112 15.6487L6.16334 14.6461M14.2525 11.8112L20.2891 8.41961C21.237 7.88705 21.237 6.51405 20.2891 5.98149L14.2525 2.58993C12.8524 1.80336 11.1476 1.80336 9.74754 2.58993L3.71093 5.98149C2.76303 6.51405 2.76302 7.88705 3.71092 8.41961L9.74754 11.8112C11.1476 12.5977 12.8524 12.5977 14.2525 11.8112Z'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
		</svg>
	),
	Category: (props: IconProps) => (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<rect
				x='3.5'
				y='4'
				width='7'
				height='7'
				rx='2.5'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<rect
				x='3.5'
				y='14'
				width='7'
				height='7'
				rx='2.5'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<rect
				x='13.5'
				y='4'
				width='7'
				height='7'
				rx='2.5'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<rect
				x='13.5'
				y='14'
				width='7'
				height='7'
				rx='2.5'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
		</svg>
	),
	Users: (props: IconProps) => (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<circle
				cx='3.40426'
				cy='3.40426'
				r='3.40426'
				transform='matrix(-1 0 0 1 15.617 5)'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<path
				d='M6.25532 16.8594C6.25532 16.1272 6.71562 15.474 7.40518 15.2277V15.2277C10.5141 14.1174 13.9115 14.1174 17.0203 15.2277V15.2277C17.7099 15.474 18.1702 16.1272 18.1702 16.8594V17.979C18.1702 18.9896 17.2751 19.7659 16.2747 19.6229L15.9412 19.5753C13.4681 19.222 10.9574 19.222 8.48437 19.5753L8.15081 19.6229C7.15039 19.7659 6.25532 18.9896 6.25532 17.979V16.8594Z'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<path
				d='M17.3192 11.9026C18.7964 11.9026 19.9939 10.7051 19.9939 9.22787C19.9939 7.75064 18.7964 6.5531 17.3192 6.5531'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
			<path
				d='M20.2486 18.0051L20.5107 18.0425C21.2967 18.1548 22 17.5448 22 16.7508V15.8711C22 15.2958 21.6383 14.7826 21.0965 14.5891C20.5561 14.3961 20.0045 14.2458 19.4468 14.1382'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
			<path
				d='M6.68085 11.9026C5.20362 11.9026 4.00608 10.7051 4.00608 9.22787C4.00608 7.75064 5.20362 6.5531 6.68085 6.5531'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
			<path
				d='M3.7514 18.0051L3.48932 18.0425C2.70327 18.1548 2 17.5448 2 16.7508V15.8711C2 15.2958 2.36167 14.7826 2.90347 14.5891C3.44392 14.3961 3.99546 14.2458 4.55319 14.1382'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
		</svg>
	),
	Chart: (props: IconProps) => (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<rect
				x='2'
				y='2'
				width='20'
				height='20'
				rx='5'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<path
				d='M8 17L8 14'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 17L12 7'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16 17L16 10'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	),
	Rocket: (props: IconProps) => (
		<svg
			width='24'
			height='23'
			viewBox='0 0 24 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M18.3037 12.8089L17.7538 12.2989L18.3037 12.8089ZM11.2326 5.73783L11.7426 6.28773L11.2326 5.73783ZM21.661 4.27232L22.4047 4.36958L21.661 4.27232ZM19.7692 2.38046L19.8664 3.12413L19.8664 3.12413L19.7692 2.38046ZM6.49449 12.6506L7.16791 12.9808L6.49449 12.6506ZM11.3909 17.547L11.0607 16.8736L11.0607 16.8736L11.3909 17.547ZM8.22742 10.1572C7.93453 9.86432 7.45965 9.86432 7.16676 10.1572C6.87387 10.4501 6.87387 10.925 7.16676 11.2179L8.22742 10.1572ZM12.8236 16.8747C13.1165 17.1676 13.5914 17.1676 13.8843 16.8747C14.1772 16.5818 14.1772 16.107 13.8843 15.8141L12.8236 16.8747ZM6.45966 18.6425C6.75255 18.3496 6.75255 17.8747 6.45966 17.5818C6.16676 17.2889 5.69189 17.2889 5.399 17.5818L6.45966 18.6425ZM2.57057 20.4103C2.27767 20.7032 2.27767 21.178 2.57057 21.4709C2.86346 21.7638 3.33834 21.7638 3.63123 21.4709L2.57057 20.4103ZM4.33833 16.5212C4.63123 16.2283 4.63123 15.7534 4.33833 15.4605C4.04544 15.1676 3.57057 15.1676 3.27767 15.4605L4.33833 16.5212ZM1.86346 16.8747C1.57057 17.1676 1.57057 17.6425 1.86346 17.9354C2.15635 18.2283 2.63123 18.2283 2.92412 17.9354L1.86346 16.8747ZM8.58097 20.7638C8.87387 20.4709 8.87387 19.996 8.58097 19.7032C8.28808 19.4103 7.81321 19.4103 7.52031 19.7032L8.58097 20.7638ZM6.1061 21.1174C5.81321 21.4103 5.81321 21.8851 6.1061 22.178C6.399 22.4709 6.87387 22.4709 7.16676 22.178L6.1061 21.1174ZM10.5962 21.082L11.3387 20.9759L11.3387 20.9759L10.5962 21.082ZM15.7581 17.6172L16.5006 17.5111L16.5006 17.5111L15.7581 17.6172ZM2.95946 13.4453L3.06552 12.7028L3.06552 12.7028L2.95946 13.4453ZM6.42428 8.2834L6.31821 9.02586L6.31821 9.02586L6.42428 8.2834ZM9.75037 16.63L7.41151 14.2911L6.35085 15.3518L8.68971 17.6906L9.75037 16.63ZM17.7538 12.2989C15.8601 14.3406 12.7854 16.028 11.0607 16.8736L11.721 18.2204C13.4613 17.3673 16.7569 15.5795 18.8536 13.3189L17.7538 12.2989ZM7.16791 12.9808C8.01345 11.256 9.70087 8.18137 11.7426 6.28773L10.7226 5.18794C8.46196 7.28458 6.6742 10.5802 5.82106 12.3205L7.16791 12.9808ZM20.9174 4.17506C20.6135 6.49841 19.8062 10.086 17.7538 12.2989L18.8536 13.3189C21.2491 10.7361 22.0962 6.72859 22.4047 4.36958L20.9174 4.17506ZM11.7426 6.28773C13.9555 4.23532 17.5431 3.42799 19.8664 3.12413L19.6719 1.6368C17.3129 1.94532 13.3054 2.79243 10.7226 5.18794L11.7426 6.28773ZM22.4047 4.36958C22.6158 2.75571 21.2858 1.42572 19.6719 1.6368L19.8664 3.12413C20.5034 3.04082 21.0007 3.5381 20.9174 4.17506L22.4047 4.36958ZM7.41151 14.2911C7.04833 13.9279 6.95959 13.4057 7.16791 12.9808L5.82106 12.3205C5.31287 13.3571 5.56306 14.564 6.35085 15.3518L7.41151 14.2911ZM8.68971 17.6906C9.4775 18.4784 10.6844 18.7286 11.721 18.2204L11.0607 16.8736C10.6358 17.0819 10.1135 16.9932 9.75037 16.63L8.68971 17.6906ZM7.16676 11.2179L12.8236 16.8747L13.8843 15.8141L8.22742 10.1572L7.16676 11.2179ZM5.399 17.5818L2.57057 20.4103L3.63123 21.4709L6.45966 18.6425L5.399 17.5818ZM3.27767 15.4605L1.86346 16.8747L2.92412 17.9354L4.33833 16.5212L3.27767 15.4605ZM7.52031 19.7032L6.1061 21.1174L7.16676 22.178L8.58097 20.7638L7.52031 19.7032ZM13.1772 6.97523C12.1032 8.04917 12.1032 9.79037 13.1772 10.8643L14.2378 9.80366C13.7497 9.3155 13.7497 8.52404 14.2378 8.03589L13.1772 6.97523ZM13.1772 10.8643C14.2511 11.9383 15.9923 11.9383 17.0663 10.8643L16.0056 9.80366C15.5174 10.2918 14.726 10.2918 14.2378 9.80366L13.1772 10.8643ZM17.0663 10.8643C18.1402 9.79037 18.1402 8.04917 17.0663 6.97523L16.0056 8.03589C16.4938 8.52404 16.4938 9.3155 16.0056 9.80366L17.0663 10.8643ZM17.0663 6.97523C15.9923 5.90129 14.2511 5.90129 13.1772 6.97523L14.2378 8.03589C14.726 7.54773 15.5174 7.54773 16.0056 8.03589L17.0663 6.97523ZM14.9449 17.9354L11.763 21.1174L12.8236 22.178L16.0056 18.996L14.9449 17.9354ZM11.3387 20.9759L10.9144 18.0061L9.4295 18.2182L9.85377 21.1881L11.3387 20.9759ZM14.7328 15.7434L15.0156 17.7233L16.5006 17.5111L16.2177 15.5312L14.7328 15.7434ZM11.763 21.1174C11.6173 21.263 11.3678 21.1799 11.3387 20.9759L9.85377 21.1881C10.0577 22.6157 11.8039 23.1977 12.8236 22.178L11.763 21.1174ZM16.0056 18.996C16.3951 18.6066 16.5785 18.0564 16.5006 17.5111L15.0156 17.7233C15.0268 17.8011 15.0006 17.8797 14.9449 17.9354L16.0056 18.996ZM5.04542 8.03591L1.86344 11.2179L2.9241 12.2786L6.10608 9.09657L5.04542 8.03591ZM2.85339 14.1877L5.82324 14.612L6.03537 13.1271L3.06552 12.7028L2.85339 14.1877ZM8.51024 7.82378L6.53034 7.54094L6.31821 9.02586L8.29811 9.3087L8.51024 7.82378ZM1.86344 11.2179C0.843735 12.2376 1.4258 13.9838 2.85339 14.1877L3.06552 12.7028C2.86158 12.6737 2.77843 12.4242 2.9241 12.2786L1.86344 11.2179ZM6.10608 9.09657C6.16172 9.04093 6.24031 9.01473 6.31821 9.02586L6.53034 7.54094C5.98506 7.46304 5.43491 7.64642 5.04542 8.03591L6.10608 9.09657Z'
				fill='currentColor'
			/>
		</svg>
	),
	LockCheck: (props: IconProps) => (
		<svg
			width='24'
			height='23'
			viewBox='0 0 24 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<rect
				x='4'
				y='9'
				width='16'
				height='12'
				rx='4'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<path
				d='M10 14.375L11.5 15.8125L14.5 12.9375'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16 9V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7L8 9'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
		</svg>
	),
	Case: (props: IconProps) => (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M2.00002 8.42871C2.00002 7.32414 2.89545 6.42871 4.00002 6.42871H20C21.1046 6.42871 22 7.32414 22 8.42871V10.0835C22 10.9667 21.4207 11.7453 20.5747 11.9991L13.1494 14.2267C12.3996 14.4516 11.6004 14.4516 10.8506 14.2267L3.42532 11.9991C2.57935 11.7453 2.00002 10.9667 2.00002 10.0835V8.42871Z'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<path
				d='M12 11.5717L12 9.85742'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.83339 11.5713L2.83339 16.9998C2.83339 19.2089 4.62425 20.9998 6.83339 20.9998H17.1667C19.3759 20.9998 21.1667 19.2089 21.1667 16.9998V11.5713'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<path
				d='M15.3333 6.42855V5C15.3333 3.89543 14.4379 3 13.3333 3H10.6667C9.56209 3 8.66666 3.89543 8.66666 5L8.66666 6.42855'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
		</svg>
	),
	Graph: (props: IconProps) => (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M11 6C11 5.44772 10.5506 4.99356 10.0026 5.06242C8.77376 5.21683 7.59275 5.65513 6.55544 6.34824C5.23985 7.22729 4.21446 8.47672 3.60896 9.93853C3.00346 11.4003 2.84504 13.0089 3.15372 14.5607C3.4624 16.1126 4.22433 17.538 5.34315 18.6569C6.46197 19.7757 7.88743 20.5376 9.43928 20.8463C10.9911 21.155 12.5997 20.9965 14.0615 20.391C15.5233 19.7855 16.7727 18.7602 17.6518 17.4446C18.3449 16.4072 18.7832 15.2262 18.9376 13.9974C19.0064 13.4494 18.5523 13 18 13H12.5C11.6716 13 11 12.3284 11 11.5V6Z'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<path
				d='M14 4C14 3.44772 14.45 2.99268 14.9966 3.07131C15.5731 3.15423 16.1383 3.30896 16.6788 3.53284C17.5281 3.88463 18.2997 4.40024 18.9497 5.05025C19.5998 5.70026 20.1154 6.47194 20.4672 7.32122C20.691 7.86171 20.8458 8.4269 20.9287 9.00339C21.0073 9.55005 20.5523 10 20 10L15 10C14.4477 10 14 9.55228 14 9V4Z'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
		</svg>
	),
};

const IconsArray = Object.values(Icons);
export default IconsArray;
