// #include <iostream>
// #include <climits>
// using namespace std;

// int findMinVertex(int* distance, bool* visited, int n) {
//     int minVertex = -1;
//     for (int i = 0; i < n; i++) {
//         if (!visited[i] && (minVertex == -1 || distance[i] < distance[minVertex])) {
//             minVertex = i;
//         }
//     }
//     return minVertex;
// }

// void dijkstra(int** edges, int n) {
//     int* distance = new int[n];
//     bool* visited = new bool[n];

//     for (int i = 0; i < n; i++) {
//         distance[i] = INT_MAX;
//         visited[i] = false;
//     }

//     distance[0] = 0;  // Starting node distance is 0

//     for (int i = 0; i < n - 1; i++) {
//         int minVertex = findMinVertex(distance, visited, n);
//         visited[minVertex] = true;

//         for (int j = 0; j < n; j++) {
//             if (edges[minVertex][j] != 0 && !visited[j]) {  // If there is an edge
//                 int dist = distance[minVertex] + edges[minVertex][j];
//                 if (dist < distance[j]) {
//                     distance[j] = dist;
//                 }
//             }
//         }
//     }

//     // Print shortest distances
//     for (int i = 0; i < n; i++) {
//         cout << i << " " << distance[i] << endl;
//     }

//     // Cleanup dynamically allocated memory
//     delete[] visited;
//     delete[] distance;
// }

// int main() {
//     int n, e;
//     cin >> n >> e;

//     // Allocate adjacency matrix
//     int** edges = new int*[n];
//     for (int i = 0; i < n; i++) {
//         edges[i] = new int[n];
//         for (int j = 0; j < n; j++) {
//             edges[i][j] = 0;
//         }
//     }

//     // Read edges
//     for (int i = 0; i < e; i++) {
//         int f, s, weight;
//         cin >> f >> s >> weight;
//         edges[f][s] = weight;
//         edges[s][f] = weight;
//     }

//     cout << endl;
//     dijkstra(edges, n);

//     // Free dynamically allocated memory
//     for (int i = 0; i < n; i++) {
//         delete[] edges[i];
//     }
//     delete[] edges;
// }



#include <iostream>
#include <climits>
using namespace std;

int findMinVertex(int* weights, bool* visited, int n) {
    int minVertex = -1;
    for (int i = 0; i < n; i++) {
        if (!visited[i] && (minVertex == -1 || weights[i] < weights[minVertex])) {
            minVertex = i;
        }
    }
    return minVertex;
}

void prims(int** edges, int n) {
    int* parent = new int[n];   // Stores the parent of each vertex in MST
    int* weights = new int[n];  // Stores the minimum edge weight to connect a vertex
    bool* visited = new bool[n]; // Tracks visited vertices

    // Initialize arrays
    for (int i = 0; i < n; i++) {
        visited[i] = false;
        weights[i] = INT_MAX;
    }

    parent[0] = -1; // Root node has no parent
    weights[0] = 0; // Start from node 0

    for (int i = 0; i < n - 1; i++) {
        // Find the vertex with the smallest weight
        int minVertex = findMinVertex(weights, visited, n);
        visited[minVertex] = true;

        // Update neighbors
        for (int j = 0; j < n; j++) {
            if (edges[minVertex][j] != 0 && !visited[j]) { // Edge exists and not visited
                if (edges[minVertex][j] < weights[j]) {
                    weights[j] = edges[minVertex][j];
                    parent[j] = minVertex;
                }
            }
        }
    }

    // Print MST (Minimum Spanning Tree)
    cout << "Edge \tWeight\n";
    for (int i = 1; i < n; i++) {
        cout << parent[i] << " - " << i << "\t" << weights[i] << endl;
    }

    // Free memory
    delete[] parent;
    delete[] weights;
    delete[] visited;
}

int main() {
    int n, e;
    cin >> n >> e;

    // Allocate adjacency matrix
    int** edges = new int*[n];
    for (int i = 0; i < n; i++) {
        edges[i] = new int[n];
        for (int j = 0; j < n; j++) {
            edges[i][j] = 0;
        }
    }

    // Input edges
    for (int i = 0; i < e; i++) {
        int f, s, weight;
        cin >> f >> s >> weight;
        edges[f][s] = weight;
        edges[s][f] = weight;
    }

    cout << endl;
    prims(edges, n);

    // Free memory
    for (int i = 0; i < n; i++) {
        delete[] edges[i];
    }
    delete[] edges;

    return 0;
}
