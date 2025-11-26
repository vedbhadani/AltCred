const errorHandler = (err, req, res, next) => {
	console.error("Error", err);

	// Handle invalid JSON payload (body parser syntax errors)
	if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
		return res.status(400).json({ message: 'Invalid JSON payload' });
	}

	const status = err.status || 500;
	return res.status(status).json({ message: err.message || 'Internal Server Error' });
}

module.exports = errorHandler;
