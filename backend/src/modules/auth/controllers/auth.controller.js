const { register, login, refreshToken, getMe } = require("../services/auth.service")

const registerController = async (req, res) => {
    try {
        const result = await register(req.body)
        return res.status(201).json({
            "user": result.user,
            "accessToken": result.accessToken,
            "refreshToken": result.refreshToken
        })
    } catch (error) {
        if (error.message === "User already exists") {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: "Server error", details: error.message });
    }
}

const loginController = async (req, res) => {
    try {
        const result = await login(req.body)
        return res.status(200).json({
            "user": result.user,
            "accessToken": result.accessToken,
            "refreshToken": result.refreshToken
        })
    } catch (error) {
        if (error.message === "Invalid credentials") {
            return res.status(400).json({ message: error.message });
        }
        return res.status(500).json({ message: "Server error", details: error.message });
    }
}

const refreshTokenController = async (req, res) => {
    try {
        const result = await refreshToken(req.body.refreshToken)
        return res.status(200).json({
            "accessToken": result.accessToken
        })
    } catch (error) {
        if (error.message === 'refreshToken is required') {
            return res.status(400).json({ message: error.message });
        }
        if (error.message === 'Invalid or expired refresh token') {
            return res.status(401).json({ message: error.message });
        }
        return res.status(500).json({ message: "Server error", details: error.message });
    }
}

const getMeController = async (req, res) => {
    try {
        const user = await getMe(req.user.id)
        return res.status(200).json({
            "user": user
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    register: registerController,
    login: loginController,
    refreshToken: refreshTokenController,
    getMe: getMeController
}