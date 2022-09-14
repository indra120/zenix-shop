const User = require('../../models/User')

async function getUserStats(req, res) {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

  try {
    const data = await User.aggregate([
      {
        $match: {
          createdAt: {
            $gte: lastYear,
          },
        },
      },
      {
        $project: {
          month: {
            $month: '$createdAt',
          },
        },
      },
      {
        $group: {
          _id: '$month',
          total: {
            $sum: 1,
          },
        },
      },
    ])

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(err)
  }
}

module.exports = getUserStats