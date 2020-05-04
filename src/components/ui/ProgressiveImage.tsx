import React, { Component } from 'react';

type MyProps = {
	image: string;
	preview: string;
	alt?: string;
	className?: string;
	srcSet?: string;
};

type MyState = {
	currentImage: string;
	loading: boolean;
};

export interface ProgressiveImageInterface extends React.Component<MyProps> {
    loadingImage: HTMLImageElement;
}

class ProgressiveImage extends Component<MyProps, MyState>implements ProgressiveImageInterface {
	public loadingImage: HTMLImageElement;

	constructor(props: MyProps) {
		super(props);

		this.loadingImage = this.getImage();

		this.state = {
			currentImage: props.preview,
			loading: true,
		};
	}

	componentDidMount(): void {
		const { image } = this.props;
		this.fetchImage(image);
	}

	componentDidUpdate(nextProps: MyProps): void {
		this.handleImageUpdate(nextProps);
	}

	componentWillUnmount(): void {
		if (this.loadingImage) {
			this.loadingImage.onload = null;
		}
	}

	fetchImage = (src: string): void => {
		const image: HTMLImageElement = this.getImage();
		image.onload = (): void => {
			this.setState({ currentImage: this.loadingImage.src, loading: false });
		};
		image.src = src;
		this.loadingImage = image;
	}

	style = (loading: boolean): object => ({
		transition: '0s filter linear',
		filter: `${loading ? 'blur(0px)' : ''}`,
	})

	getImage = (): HTMLImageElement => {
		if (process.browser) {
			return document.createElement('img');
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return null as any;
	}

	handleImageUpdate(nextProps: MyProps): void {
		const { image } = this.props;
		if (nextProps.image !== image) {
			this.setState({ currentImage: nextProps.preview, loading: true }, () => {
				this.fetchImage(nextProps.image);
			});
		}
	}

	render(): JSX.Element {
		const { currentImage, loading } = this.state;
		const { alt, className, srcSet } = this.props;
		return (
			<img
				style={this.style(loading)}
				src={currentImage}
				alt={alt}
				className={className}
				srcSet={srcSet}
			/>
		);
	}
}

export default ProgressiveImage;
