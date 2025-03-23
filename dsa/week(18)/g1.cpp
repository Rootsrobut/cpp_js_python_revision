#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Graph {
    int V;
    vector<vector<int>> adj;
public:
    Graph(int V) {
        this->V = V;
        adj.resize(V);
    }

    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u); // Undirected graph
    }

    void BFS(int start) {
        vector<bool> visited(V, false);
        queue<int> q;
        q.push(start);
        visited[start] = true;
        while (!q.empty()) {
            int node = q.front(); q.pop();
            cout << node << " ";
            for (int neighbor : adj[node]) {
                if (!visited[neighbor]) {
                    q.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
        cout << endl;
    }

    void DFS(int start, vector<bool> &visited) {
        cout << start << " ";
        visited[start] = true;
        for (int neighbor : adj[start]) {
            if (!visited[neighbor]) {
                DFS(neighbor, visited);
            }
        }
    }

    bool hasPath(int v1, int v2) {
        vector<bool> visited(V, false);
        queue<int> q;
        q.push(v1);
        visited[v1] = true;
        while (!q.empty()) {
            int node = q.front(); q.pop();
            if (node == v2) return true;
            for (int neighbor : adj[node]) {
                if (!visited[neighbor]) {
                    q.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
        return false;
    }

    vector<int> getPathDFS(int v1, int v2) {
        vector<bool> visited(V, false);
        vector<int> path;
        if (dfsHelper(v1, v2, visited, path)) {
            reverse(path.begin(), path.end());
            return path;
        }
        return {};
    }

    bool dfsHelper(int node, int target, vector<bool> &visited, vector<int> &path) {
        visited[node] = true;
        if (node == target) {
            path.push_back(node);
            return true;
        }
        for (int neighbor : adj[node]) {
            if (!visited[neighbor] && dfsHelper(neighbor, target, visited, path)) {
                path.push_back(node);
                return true;
            }
        }
        return false;
    }

    bool isConnected() {
        vector<bool> visited(V, false);
        DFS(0, visited);
        for (bool v : visited) {
            if (!v) return false;
        }
        return true;
    }

    vector<vector<int>> getConnectedComponents() {
        vector<bool> visited(V, false);
        vector<vector<int>> components;
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                vector<int> component;
                queue<int> q;
                q.push(i);
                visited[i] = true;
                while (!q.empty()) {
                    int node = q.front(); q.pop();
                    component.push_back(node);
                    for (int neighbor : adj[node]) {
                        if (!visited[neighbor]) {
                            q.push(neighbor);
                            visited[neighbor] = true;
                        }
                    }
                }
                sort(component.begin(), component.end());
                components.push_back(component);
            }
        }
        return components;
    }
};

int main() {
    int V, E;
    cin >> V >> E;
    Graph g(V);
    for (int i = 0; i < E; i++) {
        int u, v;
        cin >> u >> v;
        g.addEdge(u, v);
    }
    
    cout << "BFS Traversal: ";
    g.BFS(0);
    
    cout << "DFS Traversal: ";
    vector<bool> visited(V, false);
    g.DFS(0, visited);
    cout << endl;
    
    int v1, v2;
    cin >> v1 >> v2;
    cout << "Has Path: " << (g.hasPath(v1, v2) ? "true" : "false") << endl;
    
    vector<int> path = g.getPathDFS(v1, v2);
    if (!path.empty()) {
        cout << "Path: ";
        for (int node : path) cout << node << " ";
        cout << endl;
    }
    
    cout << "Is Connected: " << (g.isConnected() ? "true" : "false") << endl;
    
    cout << "Connected Components:" << endl;
    vector<vector<int>> components = g.getConnectedComponents();
    for (const auto &comp : components) {
        for (int node : comp) cout << node << " ";
        cout << endl;
    }
    return 0;
}
