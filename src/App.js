import React, { useState, useEffect, useRef } from 'react';
import useWordGame from './useWordGame';

function App() {
	const {
		textBoxRef,
		handleChange,
		text,
		isTimeRunning,
		timeRemaining,
		startGame,
		wordCount,
	} = useWordGame(36);

	return (
		<div>
			<h1>HOW FAST DO YOU TYPE?</h1>
			<textarea
				value={text}
				onChange={handleChange}
				disabled={!isTimeRunning}
				ref={textBoxRef}></textarea>
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={startGame} disabled={isTimeRunning}>
				START
			</button>
			<h4>Word count: {wordCount}</h4>
		</div>
	);
}

export default App;
