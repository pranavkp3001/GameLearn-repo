import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/StatsCard";
import ProgressRing from "@/components/ProgressRing";
import GameCard from "@/components/GameCard";
import AchievementBadge from "@/components/AchievementBadge";
import { 
  TrendingUp, 
  BookOpen, 
  Trophy, 
  Clock,
  Play,
  ArrowRight,
  Target
} from "lucide-react";

const Dashboard = () => {
  // Mock data - replace with actual data from your Django API
  const userStats = {
    totalPoints: 2450,
    gamesPlayed: 48,
    averageScore: 87,
    studyTime: "24h"
  };

  const recentGames = [
    {
      title: "Math Masters",
      subject: "Mathematics",
      difficulty: "Medium" as const,
      duration: "15 min",
      players: 156,
      rating: 4.8,
      progress: 75,
      achievements: 2
    },
    {
      title: "Science Quiz",
      subject: "Science", 
      difficulty: "Easy" as const,
      duration: "10 min",
      players: 89,
      rating: 4.6,
      progress: 100,
      achievements: 3,
      completed: true
    },
    {
      title: "History Challenge",
      subject: "History",
      difficulty: "Hard" as const,
      duration: "20 min",
      players: 234,
      rating: 4.9,
      progress: 30,
      achievements: 1
    }
  ];

  const achievements = [
    { type: "gold" as const, icon: "trophy" as const, title: "Quiz Master", earned: true },
    { type: "silver" as const, icon: "target" as const, title: "Precision", earned: true },
    { type: "bronze" as const, icon: "flame" as const, title: "Hot Streak", earned: true },
    { type: "diamond" as const, icon: "crown" as const, title: "Champion", earned: false }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome back, Alex!
          </h1>
          <p className="text-lg text-muted-foreground">
            Ready to continue your learning journey?
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Points"
            value={userStats.totalPoints.toLocaleString()}
            icon={TrendingUp}
            variant="primary"
            trend={{ value: 12, isPositive: true }}
            description="This week"
          />
          <StatsCard
            title="Games Played"
            value={userStats.gamesPlayed}
            icon={BookOpen}
            variant="success"
            trend={{ value: 8, isPositive: true }}
            description="This month"
          />
          <StatsCard
            title="Average Score"
            value={`${userStats.averageScore}%`}
            icon={Target}
            variant="warning"
            trend={{ value: 5, isPositive: true }}
            description="Last 10 games"
          />
          <StatsCard
            title="Study Time"
            value={userStats.studyTime}
            icon={Clock}
            description="This week"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Learning Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center space-y-3">
                    <ProgressRing progress={78} size="lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">78%</div>
                        <div className="text-xs text-muted-foreground">Overall</div>
                      </div>
                    </ProgressRing>
                    <div className="text-center">
                      <p className="font-medium">Mathematics</p>
                      <p className="text-sm text-muted-foreground">Level 7</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-3">
                    <ProgressRing progress={65} size="lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-success">65%</div>
                        <div className="text-xs text-muted-foreground">Overall</div>
                      </div>
                    </ProgressRing>
                    <div className="text-center">
                      <p className="font-medium">Science</p>
                      <p className="text-sm text-muted-foreground">Level 5</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-3">
                    <ProgressRing progress={45} size="lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">45%</div>
                        <div className="text-xs text-muted-foreground">Overall</div>
                      </div>
                    </ProgressRing>
                    <div className="text-center">
                      <p className="font-medium">History</p>
                      <p className="text-sm text-muted-foreground">Level 3</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Games */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Continue Playing
                </CardTitle>
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {recentGames.map((game, index) => (
                    <GameCard
                      key={index}
                      {...game}
                      onPlay={() => console.log(`Playing ${game.title}`)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <AchievementBadge
                      key={index}
                      {...achievement}
                      size="sm"
                      animate={achievement.earned}
                    />
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Challenge */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <CardHeader className="relative">
                <CardTitle className="text-lg">Weekly Challenge</CardTitle>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">Complete 5 Math Games</p>
                  <p className="text-sm text-muted-foreground">
                    Progress: 3/5 games completed
                  </p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-3/5 transition-all duration-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Reward</span>
                  <span className="font-medium text-primary">+500 Points</span>
                </div>
                <Button className="w-full gradient-primary">
                  Continue Challenge
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Subjects
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="h-4 w-4 mr-2" />
                  View Leaderboard
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Practice Mode
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;