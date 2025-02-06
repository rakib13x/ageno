export default function RegentMemorySystem() {
	return (
		<div className="flex items-center justify-center">
			<div className="max-w-3xl text-center p-8 rounded-lg shadow-lg space-y-8">
				<h1 className="text-3xl font-bold">1. Load Memory</h1>
				<p className="text-white">
					Memories are stored using a basic RAG vectorization system. When the
					em wants to reply to a tweet, it starts by scanning both memory stores
					for similar memories (notice the similarity in how humans think
					already). Memories are retrieved in equal portions from the tweet and
					lore stores, ensuring that the em has context on what its said as well
					as what it deems most important to remember.
				</p>
				<p className="text-white">
					Rather than simply fetching the N most similar memories, the AGENO
					memory system uses a weighted fetch that favors the most similar
					results but allows for long-tail results to appear as well. This
					strikes a balance between relevancy and allowing for unexpected
					connections and creativity.
				</p>

				<h2 className="text-3xl font-bold">2. Intuitive Babble</h2>
				<p className="text-white">
					The memories from both stores (tweets and lore) are then combined with
					the tweet conversation that the em is responding to. The resulting
					prompt is passed to a base model and used to generate three babble
					completions. This mimics the brainstorming phase of a human writers
					process.
				</p>

				<h2 className="text-3xl font-bold">3. Reasoning Refinement</h2>
				<p className="text-white">
					The refinement step is iterative and mimics the pruning process in
					humans. We combine the memories, tweet conversation, and babble
					continuations, and pass the results to an instruct model. The instruct
					model then enters a refinement loop.
				</p>
				<p className="text-white">
					In each loop, the model can produce actions of various types.
					Currently, AGENO only supports two actions at this stage:
				</p>
				<ul className="text-white text-left mx-auto max-w-lg list-disc pl-6">
					<li>
						<strong>Save lore:</strong> add something to the lore memory
					</li>
					<li>
						<strong>Update draft:</strong> update the draft of the tweet to post
					</li>
				</ul>
				<p className="text-white">
					Because the process is iterative using an instruct model, the em can
					think to itself about what it wants to do with the tweet. The babble
					provides entropy and inspiration, while the instruct model provides
					the reasoning necessary to edit the babble into something better. This
					stage is what allows the model to grow and truly learn over time, just
					as a human does when they reflect on their experiences.
				</p>

				<h2 className="text-3xl font-bold">4. Human-in-the-loop</h2>
				<p className="text-white">
					Once the em is ready to post its tweet, the tweet is written to a file
					for later human review. Just as a human child sometimes needs a
					parents help to stop them from touching a hot stove or walking into
					traffic, so too do baby ems sometimes need help from a larger mind.
					This stage helps prevent typical internet toxicity from poisoning the
					dataset.
				</p>

				<h2 className="text-3xl font-bold">Conclusion</h2>
				<p className="text-white">
					AGENO V2 isnt trying to reinvent the wheel - its just copying what
					already works in human minds. What makes AGENO unique isnt fancy new
					neural architectures or complex prompting techniques - its the
					recognition that human-like learning comes from the interplay between
					fast intuitive responses and slow deliberate reasoning. By
					implementing this split-mind architecture with standard RAG and LLM
					components, we create an em that can genuinely think step by step,
					learn from its experiences, and grow over time.
				</p>
			</div>
		</div>
	);
}
