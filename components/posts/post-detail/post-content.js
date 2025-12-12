import ReactMarkdown from 'react-markdown';
import PostHeader from "./post-header";
import classes from './post-content.module.css';
import Image from 'next/image';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import dynamic from "next/dynamic";

const SyntaxHighlighter = dynamic(() =>
  import("react-syntax-highlighter").then(mod => mod.Prism),
  { ssr: false }
);
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props){
    const {post} = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const customRenderers = {
        // img(image){
        //     return (<Image src={`/images/posts/${post.slug}/${image.src}`} 
        //     alt={image.alt} 
        //     width={600} 
        //     height={300} />)
        // },
        p(paragraph){
            const {node} = paragraph;
            if(node.children[0].tagName === 'img'){
                const image = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image 
                            src={`/images/posts/${post.slug}/${image.properties.src}`} 
                            alt={image.properties.alt || 'Post image'}
                            width={600} 
                            height={300}
                            priority  // ADDED: Prevents LCP warning for above-the-fold images
                        />
                    </div>
                )
            }
            return <p>{paragraph.children}</p>
        },
        code(code){
            const {className, children} = code;
            // const language = className.split('-')[1];  // REMOVED: This throws error when className is undefined
            const language = className ? className.split('-')[1] : 'text';  // FIXED: Check if className exists before splitting

            return (
                <SyntaxHighlighter 
                    style={atomDark} 
                    language={language} 
                    children={children} 
                />
            )
        }
    };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent;