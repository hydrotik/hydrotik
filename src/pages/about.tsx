import { NextPage } from 'next';
import Layout from '../components/global/layout';
import ProgressiveImage from '../components/ui/ProgressiveImage';


const About: NextPage = (): JSX.Element => (
	<Layout>
		<main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/2">
					<h1 className="font-bold text-xl mb-5">About</h1>
					{[
						{
							heading: 'What is Hydrotik?',
							body: 'Hydrotik is an experiential digital consultancy with a focus on retail and entertainment brands. Engaging customer experiences, digital transformation, user experience, and multimedia/sound design are just a few of the things we specialize in.',
						},
						{
							heading: 'Donovan Adams',
							body: 'Donovan has been leading teams of developers and creative technologists for over 10 years. Over his 20 year career, he has worked for Saks Fifth Avenue, Hudson\'s Bay, Macys.com, NBC/Universal, Syfy channel, and R/GA.',
						},
					].map((section) => (
						<div key={section.heading}>
							<h2 className="font-bold mb-3 text-l">{section.heading}</h2>
							<p className="mb-6">{section.body}</p>
						</div>
					))}
				</div>

				<div className="md:ml-6 md:w-1/2">
					<ProgressiveImage
						preview="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAUAAD/4QMXaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2MEJBM0ZBNkZBMzExRUFCNjUzODE0QzJDQjEzMkE0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2MEJBM0Y5NkZBMzExRUFCNjUzODE0QzJDQjEzMkE0IiB4bXA6Q3JlYXRvclRvb2w9IlZlci4xLjAwICI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkzRDE2OUJDNkZBMDExRUFCQ0I1QzNBRUYxRjAwMDlDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkzRDE2OUJENkZBMDExRUFCQ0I1QzNBRUYxRjAwMDlDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAEg4ODhAOFRAQFR4UERQeIxoVFRojIhkZGhkZIiceIyEhIx4nJy4wMzAuJz4+QUE+PkFBQUFBQUFBQUFBQUFBQQEUFBQWGRYbFxcbGhYaFhohGh0dGiExISEkISExPi0nJycnLT44OzMzMzs4QUE+PkFBQUFBQUFBQUFBQUFBQUFB/8AAEQgADwAKAwEiAAIRAQMRAf/EAFkAAQEBAAAAAAAAAAAAAAAAAAMEBQEBAQAAAAAAAAAAAAAAAAAAAQMQAAEDBQEAAAAAAAAAAAAAAAEAAhMRIVGRAxIRAAMBAAAAAAAAAAAAAAAAAAACFBH/2gAMAwEAAhEDEQA/AK5qFJM1ZMnQuu06KT10wdKVb6MyH//Z"
						image="images/nyc_lrg.jpg"
						alt="Hydrotik About Image"
					/>
				</div>
			</div>
		</main>
	</Layout>
);

export default About;
