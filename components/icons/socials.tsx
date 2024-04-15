import { HTMLAttributes } from 'react';

type IconProps = HTMLAttributes<SVGElement>;

export const Icons = {
	mail: (props: IconProps) => (
		<svg
			width='20'
			height='20'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g clipPath='url(#clip0_217_52)'>
				<path
					d='M15.9 6.3C16.275 6.585 16.5 7.0275 16.5 7.5V15C16.5 15.3978 16.342 15.7794 16.0607 16.0607C15.7794 16.342 15.3978 16.5 15 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15V7.5C1.5 7.26713 1.55422 7.03746 1.65836 6.82918C1.7625 6.6209 1.91371 6.43972 2.1 6.3L8.1 1.8C8.35964 1.60527 8.67544 1.5 9 1.5C9.32455 1.5 9.64035 1.60527 9.9 1.8L15.9 6.3Z'
					stroke='currentColor'
					strokeWidth='1.66667'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M16.5 7.5L9.7725 11.775C9.54095 11.9201 9.27324 11.997 9 11.997C8.72676 11.997 8.45905 11.9201 8.2275 11.775L1.5 7.5'
					stroke='currentColor'
					strokeWidth='1.66667'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_217_52'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	),
	fb: (props: IconProps) => (
		<svg
			width='20'
			height='20'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M13.5 1.5H11.25C10.2554 1.5 9.30161 1.89509 8.59835 2.59835C7.89509 3.30161 7.5 4.25544 7.5 5.25V7.5H5.25V10.5H7.5V16.5H10.5V10.5H12.75L13.5 7.5H10.5V5.25C10.5 5.05109 10.579 4.86032 10.7197 4.71967C10.8603 4.57902 11.0511 4.5 11.25 4.5H13.5V1.5Z'
				stroke='currentColor'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	),
	ig: (props: IconProps) => (
		<svg
			width='20'
			height='20'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g clipPath='url(#clip0_217_48)'>
				<path
					d='M12.75 1.5H5.25C3.17893 1.5 1.5 3.17893 1.5 5.25V12.75C1.5 14.8211 3.17893 16.5 5.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V5.25C16.5 3.17893 14.8211 1.5 12.75 1.5Z'
					stroke='currentColor'
					strokeWidth='1.66667'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12 8.52773C12.0926 9.15191 11.986 9.78939 11.6953 10.3495C11.4047 10.9096 10.9449 11.3638 10.3812 11.6475C9.8176 11.9312 9.17886 12.0299 8.55586 11.9297C7.93287 11.8294 7.35734 11.5353 6.91115 11.0891C6.46496 10.6429 6.17082 10.0674 6.07058 9.44439C5.97033 8.82139 6.06907 8.18265 6.35277 7.61901C6.63647 7.05537 7.09066 6.59553 7.65076 6.30491C8.21086 6.01428 8.84834 5.90767 9.47252 6.00023C10.1092 6.09464 10.6987 6.39132 11.1538 6.84646C11.6089 7.30159 11.9056 7.89103 12 8.52773Z'
					stroke='currentColor'
					strokeWidth='1.66667'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M13.125 4.875H13.1333'
					stroke='currentColor'
					strokeWidth='1.66667'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_217_48'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	),
	in: (props: IconProps) => (
		<svg
			width='20'
			height='20'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M12 6C13.1935 6 14.3381 6.47411 15.182 7.31802C16.0259 8.16193 16.5 9.30653 16.5 10.5V15.75H13.5V10.5C13.5 10.1022 13.342 9.72064 13.0607 9.43934C12.7794 9.15804 12.3978 9 12 9C11.6022 9 11.2206 9.15804 10.9393 9.43934C10.658 9.72064 10.5 10.1022 10.5 10.5V15.75H7.5V10.5C7.5 9.30653 7.97411 8.16193 8.81802 7.31802C9.66193 6.47411 10.8065 6 12 6Z'
				stroke='currentColor'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M4.5 6.75H1.5V15.75H4.5V6.75Z'
				stroke='currentColor'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3 4.5C3.82843 4.5 4.5 3.82843 4.5 3C4.5 2.17157 3.82843 1.5 3 1.5C2.17157 1.5 1.5 2.17157 1.5 3C1.5 3.82843 2.17157 4.5 3 4.5Z'
				stroke='currentColor'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	),
	yt: (props: IconProps) => (
		<svg
			width='20'
			height='20'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M1.87501 12.75C1.35107 10.2774 1.35107 7.72255 1.87501 5.25C1.94385 4.99891 2.07686 4.77006 2.26096 4.58595C2.44506 4.40185 2.67391 4.26884 2.92501 4.2C6.94759 3.53359 11.0524 3.53359 15.075 4.2C15.3261 4.26884 15.5549 4.40185 15.7391 4.58595C15.9232 4.77006 16.0562 4.99891 16.125 5.25C16.6489 7.72255 16.6489 10.2774 16.125 12.75C16.0562 13.0011 15.9232 13.2299 15.7391 13.414C15.5549 13.5981 15.3261 13.7312 15.075 13.8C11.0524 14.4665 6.94758 14.4665 2.92501 13.8C2.67391 13.7312 2.44506 13.5981 2.26096 13.414C2.07686 13.2299 1.94385 13.0011 1.87501 12.75Z'
				stroke='currentColor'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.5 11.25L11.25 9L7.5 6.75V11.25Z'
				stroke='currentColor'
				strokeWidth='1.66667'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	),
};

const SocialIcons = Object.values(Icons);
export default SocialIcons;
