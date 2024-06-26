
async function logout(req, res) {
    try {
        
        return res.cookie("token","").status(200).json({
            message: "Logged out successfully",
            success: true
        })
        
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            error: true
        })
    }
}


export default logout