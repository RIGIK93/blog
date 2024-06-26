---
title: Introduction to Darboux Integral
date: "2024-05-17"
---

<script>
    import Note from "$lib/components/callouts/Note.svelte"
    import Info from "$lib/components/callouts/Info.svelte"
    import Example from "$lib/components/callouts/Example.svelte"
</script>

### Partition

> Def 1: Let $a < b$. A set $P \subseteq [a,b]$ is a partition of $[a,b]$ if $|P| \in \mathbb{N}$.

### Refinement

> Def 2: Let $P$ and $P'$ be partitions of $[a,b]$, then $P'$ is refinement of $P$ if $P \subseteq P'$.

### Lower Darboux Sum

> Def 3: For a partition $P$ of $[a,b]$ and $|P| = n + 1$, the lower Darboux Sum of $f: [a,b] \to \mathbb{R}$ over $P$, $\mathcal{L}(f,P)$, is
> $$
> \sum^{n}_{i=1} (p_{i+1} - p_{i}) \inf_{x \in (p_{i},p_{i+1})} f(x)
> $$
> where $\exists!p_{n} \in\ P: p_{1} \leq p_{2} \leq \dots \leq p_{n+1}$.

### Upper Darboux Sum

> Def 4: For a partition $P$ of $[a,b]$ and $|P| = n + 1$, the upper Darboux Sum of $f: [a,b] \to \mathbb{R}$ over $P$, $\mathcal{U}(f,P)$, is
> 
> $$
> \sum^{n}_{i=1} (p_{i+1} - p_{i}) \sup_{x \in (p_{i},p_{i+1})} f(x)
> $$
> where $\exists!p_{n} \in P: p_{1} \leq p_{2} \leq \dots \leq p_{n+1}$.

### Refinement Inequality Theorem

> Lemma 5: For an ordered set $S$ and its subset $B \subseteq S$, $\inf B \geq \inf S$ and $\sup B \leq \sup S$.

> Lemma 6: For $f:[a,b] \to R$, given a partition $P$ of $[a,b]$ and its refinement $P' = P \cup \{ c \}$,  $\mathcal{L}(f,P) \leq \mathcal{L}(f,P’)$ and $\mathcal{U}(f,P) \geq \mathcal{U}(f,P')$.

Let $p_{n-1},p_{n},p_{n+1}$ where $p_{n} = c$, then

$$
\begin{align}
\mathcal{L}(f,P') - \mathcal{L}(f,P) &= (p_{n+1} - p_{n}) \inf_{x \in (p_{n}, p_{n+1})} f(x)  \\
&+ (p_{n} - p_{n-1}) \inf_{x \in (p_{n-1}, p_{n})} f(x)  \\
&- (p_{n+1} - p_{n-1}) \inf_{x \in (p_{n-1}, p_{n+1})} f(x)
\end{align}
$$
For simplicity, we assume $i_{0} = \inf_{x \in (p_{n-1}, p_{n+1})} f(x)$, $i_{1} = \inf_{x \in (p_{n}, p_{n+1})} f(x)$ and $i_{2} = \inf_{x \in (p_{n-1}, p_{n})} f(x)$, then

$$
\begin{align}
\Delta \mathcal{L} &= (p_{n+1} - p_{n})i_{1} + (p_{n} - p_{n-1})i_{2} - (p_{n+1} - p_{n-1})i_{0} \\
&= p_{n+1}i_{1} - p_{n}i_{1} + p_{n}i_{2} - p_{n-1}i_{2} - p_{n+1}i_{0} + p_{n-1}i_{0} \\
&= p_{n-1}(i_{0}-i_{2}) + p_{n}(i_{2}-i_{1}) + p_{n+1}(i_{1}-i_{0})
\end{align}
$$

Without the loss of generality, assume that $i_{1} = i_{0}$ (since $(p_{n-1},p_{n}) \cup (p_{n},p_{n+1}) = (p_{n-1},p_{n+1})$ implies that $i_{0}$ is contained in one of those two intervals), then

$$
\begin{align}
\Delta \mathcal{L} = p_{n-1} (i_{0} - i_{2}) + p_{n}(i_{2} - i_{0}) = (p_{n}-p_{n-1})(i_{2}-i_{0})
\end{align}
$$

By Lemma 5, $i_{2} -i_{0} \geq 0$ and by definition $p_{n}-p_{n-1}> 0$; therefore,

$$
\Delta \mathcal{L} \geq 0 \implies \mathcal{L}(f,P') - \mathcal{L}(f,P) \geq 0 \implies \mathcal{L}(f,P') \geq \mathcal{L}(f,P). \square
$$

Equivalently, it can be shown that $\mathcal{U}(f,P') \leq \mathcal{U}(f,P)$.

> Theorem 7: Let $f: [a,b] \to \mathbb{R}$ and $P$ be a partition of $[a,b]$. If $P'$ is a refinement of $P$, then $\mathcal{L}(f,P) \leq \mathcal{L}(f,P')$ and $\mathcal{U}(f,P) \geq \mathcal{U}(f,P')$

Theorem 7 can be proven by induction of lemma 6.

### Upper-Lower Sum Comparison

> Thm 8: Let $f: [a,b] \to \mathbb{R}$, $P$ and $P'$ be arbitrary partitions of $[a,b]$, then
> $$\mathcal{L}(f,P) \leq \mathcal{U}(f,P')$$

Let $P'' = P \cup P'$, then $P,P'$ are refinements of $P''$, so by [Refinement Inequality Theorem](/Darboux%20Integral#refinement-inequality-theorem),

$$
\mathcal{L}(f,P) \leq \mathcal{L}(f,P'') \leq \mathcal{U}(f,P'') \leq \mathcal{U}(f, P). \square
$$

> [!Question]- Why is $\mathcal{L}(f,P'') \leq \mathcal{U}(f,P'')$.
> Intuitively, since [upper sum](/Darboux%20Integral#upper-darboux-sum) always overshoots and [lower sum](/Darboux%20Integral#lower-darboux-sum) over undershoots the actual integral, upper sum will always be bigger or equal to the lower sum; however, if you want a rigorous proof, here it is:
> 
> For $f: [a,b] \to \mathbb{R}$ and [Partition](/Darboux%20Integral#partition) $P$, we define 
> 
> $$
> \Delta = \mathcal{U}(f,P) - \mathcal{L}(f,P),
> $$
> 
> which, by definition of [upper](#upper-Darboux-sum) and [lower](/Darboux%20Integral#lower-darboux-sum) Darboux sums is equal to
> 
> $$
> \Delta = \sum^{n}_{i=1} \left(\sup_{x \in (p_{i},p_{i+1})} f(x) - \sup_{x \in (p_{i},p_{i+1})} f(x) \right).
> $$
> 
> By definition of supremum and infimum 
> $$\forall i \in [1\dots n],\left(\sup_{x \in (p_{i},p_{i+1})} f(x) - \inf_{x \in (p_{i},p_{i+1})} f(x)\right) \geq 0;$$ therefore,
> 
> $$
> \Delta \geq 0 \implies \mathcal{U}(f,P) - \mathcal{L}(f,P) \geq 0 \implies \mathcal{U}(f,P) \geq \mathcal{L}(f,P) \implies \mathcal{L}(f,P) \leq \mathcal{U}(f,P). \square
> $$
> 

> [!Note] "Forcing Equality">
> If we prove there exists $\mathcal{L} \geq \mathcal{U}$, then the equality $\mathcal{L} = \mathcal{U}$ is forced.


### Darboux Integral

> Def 9: Let $\mathcal{P}$ be the collection of partitions on $[a,b]$ and $f: [a,b] \to \mathbb{R}$. The lower (upper) Darboux integral, $\mathcal{L}(f)$ ($\mathcal{U}(f)$) is
> $$
> \begin{gather}
> \mathcal{L}(f) = \sup_{P \in \mathcal{P}} \mathcal{L}(f,P) \\
> \left( \mathcal{U}(f) = \inf_{P \in \mathcal{P}} \mathcal{U}(f,P) \right)
> \end{gather}
> $$

> [!Note] 
> The idea comes form the [Refinement Inequality Theorem](/Darboux%20Integral#refinement-inequality-theorem). We’re basically “taking the limit” here to get to the most optimal sum.

> Def 10: If $\mathcal{L}(f) = \mathcal{U}(f)$, then the Darboux integral exists and is equal to both $\mathcal{L}(f)$ and $\mathcal{U}(f)$.

### Integral Comparison Theorem

> Thm 11: $\mathcal{L}(f) \leq \mathcal{U}(f)$.

Let $P \in \mathcal{P}$. Since $\mathcal{U}(f,P)$ is an upper bound of $\{ \mathcal{L}(f,Q) : Q \in \mathcal{P} \}$, $\mathcal{U}(f,P) \geq \mathcal{L}(f)$ (by [Upper-Lower Sum Comparison](/Darboux%20Integral#upper-lower-sum-comparison). Since $P$ is arbitrary, $\mathcal{L}(f)$ is a lower bound of $\{ \mathcal{U}(f,Q) : Q \in \mathcal{P} \}$ (by [Upper-Lower Sum Comparison](/Darboux%20Integral#upper-lower-sum-comparison)), so $\mathcal{L}(f) \leq \mathcal{U}(f)$.

> [!Note] 
> Theorem 11, combined with the theorem 8, is basically the same the following lemma:
> $$A \leq B \implies \sup A \leq \inf B$$

##### Forcing Equality (Important Corollary)

> $$
> \mathcal{U}(f) \leq \mathcal{L}(f,P) \implies \mathcal{U}(f) = \mathcal{L}(f)
> $$

Proof of the corollary:

By definition of [Lower Darboux Integral](/Darboux%20Integral#darboux-integral), $\mathcal{L}(f,P) \leq \mathcal{L}(f)$, then

$$
\mathcal{U}(f) \leq \mathcal{L}(f,P) \implies \mathcal{U}(f) \leq \mathcal{L}(P)
$$

By [Integral Comparison Theorem](/Darboux%20Integral#integral-comparison-theorem), $\mathcal{L}(f) \leq \mathcal{U}(f)$, hence

$$
\begin{cases}
\mathcal{L}(f) \leq \mathcal{U}(f)  \\
\mathcal{U}(f) \leq \mathcal{L}(P)
\end{cases} \implies \mathcal{U}(f) = \mathcal{L}(P). \square
$$

### Darboux Integrable Theorem

> Thm 12: Let $f: [a,b] \to \mathbb{R}$ be continuous, then $f$ is [Darboux integrable](/Darboux%20Integral#darboux-integral).

> [!Note] 
> From continuity on a closed interval, necessary (for the proof) uniform continuity and boundness conditions are implied.

Let $\varepsilon > 0$, then by definition of continuity $\exists \delta > 0$ such that 

$$
|s-t| < \delta \implies |f(s) - f(t)| < \varepsilon.
$$

Let $n$ be such that $\frac{b-a}{n} < \delta$, then let partition

$$
P = \left\{  i\frac{b-a}{n} + a: i \in \{ 0,\dots,n \} \right\},
$$

> [!Note] 
> $P$ gives us the values of $x$ of columns equal in distance across $[a,b]$, i.e. the columns the good-old Reinman integral would split the sum onto.

then 

$$
\begin{gather}
\mathcal{U}(f) - \mathcal{L}(f) \leq \mathcal{U}(f,P) - \mathcal{L}(f,P) = \sum^{n}_{k=1} \left(\frac{b-a}{n}\right) (S_{k} - I_{k}) \leq \\
= n \left(\frac{b-a}{n}\right)(S_{k} - I_{k}) \leq n \left(\frac{b-a}{n}\right) \varepsilon = \varepsilon (b-a),
\end{gather}
$$
where $S_{k} = \sup_{x \in (p_{k},p_{k+1})} f(x)$, $I_{k} = \inf_{x \in (p_{k},p_{k+1})} f(x)$. Since $\varepsilon$ is multiplied by a constant expression $(b-a)$, it follows

$$
\mathcal{U}(f) - \mathcal{L}(f) \leq \varepsilon (b-a) \implies \mathcal{U}(f) - \mathcal{L}(f) \leq \varepsilon. \square
$$

> [!Question]- Why is $\mathcal{U}(f) - \mathcal{L}(f) \leq \varepsilon$ a sufficient condition for Darboux Integrability?
> It is a pretty important theorem. 
> 
> Let $\mathcal{U}(f) - \mathcal{L}(f) \leq \varepsilon$. By [Integral Comparison Theorem](/Darboux%20Integral#integral-comparison-theorem),  it is sufficient to prove $\mathcal{U}(f) \leq \mathcal{L}(f)$ in order to show that Darboux integral exists. 
> 
> For the sake of contradiction, assume that $\mathcal{U}(f) \not\leq \mathcal{L}(f)$, then $\exists m >0$ such that
> 
> $$
> \mathcal{U}(f) - \mathcal{L}(f) = m
> $$
> 
> However since $\varepsilon$ is arbitrary, let $\varepsilon = \frac{m}{2}$, therefore
> 
> $$
> \mathcal{U}(f) - \mathcal{L}(f) \leq \frac{m}{2}.
> $$
> 
> This is a contradiction since $m$ cannot be less than or equal than $\frac{m}{2}$; as such, Darboux integral exists.
> 
> You can also read about it here: [Condition for Darboux Integrability - ProofWiki](https://proofwiki.org/wiki/Condition_for_Darboux_Integrability). 

%% 
Since $\varepsilon$ is arbitrary, by [Refinement Inequality Theorem](/Darboux%20Integral#refinement-inequality-theorem) $\exists P$ such that

$$
\mathcal{U}(f) \leq \mathcal{L}(f) + \varepsilon \leq \mathcal{L}(f,P)
$$
which by the [Forcing Equality Corollary to Integral Comparison Theorem](/Darboux%20Integral#integral-comparison-theorem) implies that $\mathcal{U}(f) = \mathcal{L}(f)$ and Darboux integral exists. $\square$
 %%


> [!Note] 
> 
> $$
> \begin{align}
> \mathcal{U}(f,P) - \mathcal{L}(f,P) &= \sum_{k=1}^{n} (p_{k+1} - p_{k}) \sup_{x \in (p_{k},p_{k+1})} f(x)   - \sum_{k=1}^{n} (p_{k+1} -p_{k}) \inf_{x \in (p_{k},p_{k+1})} f(x)  \\
> &= \sum^{n}_{k=1} (p_{k+1}-p_{k})(S_{k}-I_{k})
> \end{align}
> $$
> 
> From definition of $P$, it follows that $p_{k} = (k-1) \frac{b-a}{n} + a$, so $p_{k+1} - p_{k} = \frac{b-a}{n}$, so
> 
> $$
> = \sum^{n}_{k=1} \left(\frac{b-a}{n}\right) (S_{k} - I_{k})
> $$
> 

> [!Question]- Why is $(S_{k} - I_{k}) \leq \varepsilon$?
> 
> Let $k \in [1\dots n]$, recall $\frac{b-a}{n} < \delta$, then
> 
> $$
> \begin{align}
> S_{k} - I_{k} &= \sup_{x \in ((k-1) \frac{b-a}{n} + a,k \frac{b-a}{n} + a)} f(x) - \inf_{x \in ((k-1) \frac{b-a}{n} + a,k \frac{b-a}{n} + a)} f(x) 
> \end{align}
> $$
> 
> Let $s,t \in ((k-1) \frac{b-a}{n} + a,k \frac{b-a}{n} + a)$, then 
> 
> $$
> \begin{align}
> |s-t| &< \left|k \frac{b-a}{n} + a - \left((k-1) \frac{b-a}{n} + a\right)\right| \\
> &= \left|\frac{b-a}{n}\right| \\
> &< \delta.
> \end{align}
> $$
> (the worst-case scenario for $|s-t|$ is still less than $\delta$). By definition,
> 
> $$
> |s-t| < \delta \implies |f(s)-f(t)| < \varepsilon \stackrel{\text{(*)}}{\implies} |S_{k} - I_{k}| < \varepsilon
> $$
> 
> $(*)$: Since $\forall s,t$, $|f(s) - f(t)| < \varepsilon$ and $S_{k},I_{k} \in \{ f(s) : s\}, \{ f(t) : t\}$.
> 
> Finally, from the definition of supremum and infimum $S_{k} \geq I_{k}$, hence
> 
> $$
> |S_{k} - I_{k}| < \varepsilon \implies S_{k} - I_{k} < \varepsilon. \square
> $$
> 

> [!Question]- Why is $\mathcal{U}(f) - \mathcal{L}(f) \leq \mathcal{U}(f,P) - \mathcal{L}(f,P)$?
>
> > Intuitively, as we refine the sums, $\mathcal{L}$ gets larger and $\mathcal{U}$ gets smaller (since $\mathcal{L}$ undershoots and $\mathcal{U}$ overshoots the sum), so their difference gets smaller, “the window shrinks.”
> 
> Formal Proof: 
> 
> > Lemma 12.1.1: For any $A,A_{1},B,B_{1} \in \mathbb{R}$, $(A \leq A_{1}) \land (B \leq B_{1}) \implies (A + B) \leq (A_{1} + B_{1})$.
>
> > Intuitively, if you have of length $A$ and $B$, where segment $A$ is smaller than some segment $A_{1}$  and segment $B$ is smaller than segment $B_{1}$. If you put $A$ and $B$ side by side and compare them to $A_{1}$ and $B_{1}$ side by side, then the length of $AB$ will be smaller than the length of $A_{1}B_{1}$.
> 
> Since $\forall C,C_{1} \in \mathbb{R}$
> 
> $$
> C \leq C_{1} \iff \exists m \in \mathbb{R}_{\geq 0} : C + m = C_{1},
> $$
> 
> $$
> \begin{cases}
> A \leq A_{1} \\
> B \leq B_{1}
> \end{cases} \iff \begin{cases}
> \exists m\geq0 : A + m = A_{1} \\
> \exists m_{1}\geq0 : B + m_{1} = B_{1}
> \end{cases} \implies
> (A+B) + (m + m_{1}) = A_{1} + B_{1}.
> $$
> 
> Since $(m + m_{1}) \in \mathbb{R}_{\geq 0}$, 
> 
> $$
> A + B \leq A_{1} + B_{1}. \square
> $$
> 
> > Lemma 12.1.2: For any $A,B \in \mathbb{R}$, $A \leq B \iff -A \geq -B$.
> 
> Since $\forall C,C_{1} \in \mathbb{R}$
> 
> $$
> \begin{gather}
> C \leq C_{1} \iff \exists m \in \mathbb{R}_{\geq 0} : C + m = C_{1}, \\
> C \geq C_{1} \iff \exists m \in \mathbb{R}_{\geq 0} : C = C_{1} + m,
> \end{gather}
> $$
> 
> $$
> A \leq B \iff \exists m \in \mathbb{R}_{\geq 0} : A + m = B \iff \exists m \in \mathbb{R}_{\geq 0} : -A = -B + m \iff -A \geq -B. \square
> $$
> 
> > Lemma 12.1: $\mathcal{U}(f) - \mathcal{L}(f) \leq \mathcal{U}(f,P) - \mathcal{L}(f,P)$.
> 
> By definition of [Darboux Integral](/Darboux%20Integral#darboux-integral), supremum and infimum, for $f:[a,b] \to \mathbb{R}$ and all [partitions](/Darboux%20Integral#partition) $P$,
> 
> $$
> \begin{cases}
> \mathcal{L}(f) \geq \mathcal{L}(f,P) \\
> \mathcal{U}(f) \leq \mathcal{U}(f,P)
> \end{cases} \implies
> $$
> 
> By Lemma 12.1.2,
> 
> $$
> \implies \begin{cases}
> -\mathcal{L}(f) \leq -\mathcal{L}(f,P) \\
> \mathcal{U}(f) \leq \mathcal{U}(f,P)
> \end{cases} \implies
> $$
> 
> By Lemma 12.1.1,
> 
> $$
> \implies \mathcal{U}(f) - \mathcal{L}(f) \leq \mathcal{U}(f,P) - \mathcal{L}(f,P). \square
> $$
> 

### Non-Integrability of Indicator Functions

> Thm 13: $f(x) =  \begin{cases} x = 1 & x \in \mathbb{Q} \\ x = 0 & x \not\in \mathbb{Q}\end{cases}$ is not Darboux-integrable in $\mathbb{R}$.

Without formality, due to the fact that rationals and irrationals are dense in reals, in every partition $P$, $\mathcal{L}(f,P) = 0$ and $\mathcal{U}(f,P) = 1$; as such, the Darboux integral does not exist, since $\mathcal{L}(f) \neq \mathcal{U}(f)$.


___

> [!abstract] References
> - [Continuous Real Function is Darboux Integrable - ProofWiki](https://proofwiki.org/wiki/Continuous_Real_Function_is_Darboux_Integrable)
> 	- [Condition for Darboux Integrability - ProofWiki](https://proofwiki.org/wiki/Condition_for_Darboux_Integrability)
